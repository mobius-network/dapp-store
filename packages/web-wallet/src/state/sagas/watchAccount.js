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
import { assets, createTrustline } from '@mobius-network/core';

import { authActions } from 'state/auth';
import { accountActions, getMasterTrustlineCreated } from 'state/account';

import { reloadMasterAccount } from './reloadMasterAccount';

let watcher;

export function* watchAccount(delayDuration = 2000) {
  while (true) {
    yield call(reloadMasterAccount);
    yield call(delay, delayDuration);
  }
}

export function* cancelWatcherOnLogout() {
  yield take(authActions.logout);
  yield cancel(watcher);

  watcher = null;
}

export function* prepareAccount() {
  if (watcher) {
    return;
  }

  watcher = yield fork(watchAccount);
  yield fork(cancelWatcherOnLogout);

  // Wait for account activation
  yield take(accountActions.setMasterAccount);

  const state = yield select();

  if (!getMasterTrustlineCreated(state)) {
    yield put(accountActions.transact({
      name: 'createTrustline',
      operation: createTrustline(assets.mobi),
    }));
  }
}

export default takeLatest(
  [authActions.loginSuccess, authActions.watchAccount],
  prepareAccount
);
