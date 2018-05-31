import { delay } from 'redux-saga';
import {
  takeLatest,
  call,
  put,
  select,
  fork,
  take,
  cancel,
} from 'redux-saga/effects';
import { assets, stellarBalance, stellarAccount } from '@mobius-network/core';

import { authActions } from 'state/auth/reducer';
import { getWallet, getPublicKeyFor } from 'state/auth/selectors';

import { balanceActions } from 'state/balance/reducer';
import { getMasterTrustlineCreated } from 'state/balance/selectors';

export function* loadAccount(publicKey) {
  const account = yield call(stellarBalance.safeLoadAccount, publicKey);

  if (account) {
    // TODO: replace with client-sdk methods
    stellarAccount.setAccount(account);

    yield put(balanceActions.setMasterAccount(account));
  }
}

export function* watchAccount(publicKey, delayDuration = 2000) {
  while (true) {
    yield call(loadAccount, publicKey);
    yield call(delay, delayDuration);
  }
}

export function* prepareAccount() {
  const publicKey = yield select(getPublicKeyFor);

  yield call(loadAccount, publicKey);
  const accountWatcher = yield fork(watchAccount, publicKey);

  const state = yield select();

  // Wait for account activation
  yield take(balanceActions.setMasterAccount);

  // TODO: replace with client-sdk methods
  stellarAccount.setWallet(getWallet(state));

  if (!getMasterTrustlineCreated(state)) {
    const createTrustOp = stellarBalance.createTrustline(assets.mobi);

    yield call([stellarAccount, 'submitTransaction'], createTrustOp);
  }

  yield take(authActions.logout);
  yield cancel(accountWatcher);
}

export default takeLatest(authActions.login, prepareAccount);
