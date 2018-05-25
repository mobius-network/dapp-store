import { delay } from 'redux-saga';
import { takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { stellarBalance } from '@mobius-network/core';

import { authActions } from 'state/auth/reducer';
import { publicKeyFor, secretKeyFor } from 'state/auth/selectors';

import { balanceActions } from './reducer';
import { masterTrustlineCreated } from './selectors';

export function* loadAccount(publicKey) {
  // TODO: delete me
  const account = !publicKey;
  // const account = yield call(stellarBalance.safeLoadAccount, publicKey);

  if (account) {
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
  const publicKey = yield select(publicKeyFor, 0);

  yield call(loadAccount, publicKey);
  yield fork(watchAccount, publicKey);

  const state = yield select();

  if (masterTrustlineCreated(state)) {
    stellarBalance.createTrustline(
      publicKeyFor(state, 0),
      secretKeyFor(state, 0)
    );
  }
}

export default takeLatest(authActions.login, prepareAccount);
