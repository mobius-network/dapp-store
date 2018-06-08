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
import { assets, safeLoadAccount, createTrustline } from '@mobius-network/core';

import { authActions } from 'state/auth/reducer';
import { getPublicKeyFor } from 'state/auth/selectors';

import { balanceActions } from 'state/balance/reducer';
import { getMasterTrustlineCreated } from 'state/balance/selectors';

const watchers = {};

export function* loadAccount(publicKey) {
  const account = yield call(safeLoadAccount, publicKey);

  if (account) {
    yield put(balanceActions.setMasterAccount(account));
  }
}

export function* watchAccount(publicKey, delayDuration = 2000) {
  while (true) {
    yield call(delay, delayDuration);
    yield call(loadAccount, publicKey);
  }
}

export function* cancelWatcherOnLogout(publicKey) {
  yield take(authActions.logout);
  yield cancel(watchers[publicKey]);

  delete watchers[publicKey];
}

export function* prepareAccount() {
  const publicKey = yield select(getPublicKeyFor);

  yield call(loadAccount, publicKey);
  watchers[publicKey] = yield fork(watchAccount, publicKey);
  yield fork(cancelWatcherOnLogout, publicKey);

  const state = yield select();

  // Wait for account activation
  yield take(balanceActions.setMasterAccount);

  if (!getMasterTrustlineCreated(state)) {
    yield put(balanceActions.transact(createTrustline(assets.mobi)));
  }
}

export default takeLatest(
  [authActions.loginSuccess, authActions.watchAccount],
  prepareAccount
);
