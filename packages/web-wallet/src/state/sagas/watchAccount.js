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
import { requestActions } from 'state/requests/reducer';
import { getPublicKeyFor } from 'state/auth/selectors';

import { accountActions } from 'state/account/reducer';
import { getMasterTrustlineCreated } from 'state/account/selectors';

let watcher;

export function* loadAccount(publicKey) {
  try {
    const account = yield call(safeLoadAccount, publicKey);

    if (account) {
      yield put(accountActions.setMasterAccount(account));
    }
  } catch (error) {
    // TODO: use fetchStart to `safeLoadAccount` and error handling
    yield put(requestActions.fetchFail({ name: 'loadAccount', error }));
  }
}

export function* watchAccount(publicKey, delayDuration = 2000) {
  while (true) {
    yield call(loadAccount, publicKey);
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

  const publicKey = yield select(getPublicKeyFor);

  watcher = yield fork(watchAccount, publicKey);
  yield fork(cancelWatcherOnLogout, publicKey);

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
