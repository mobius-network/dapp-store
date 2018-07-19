import { delay } from 'redux-saga';
import { call, cancel, fork, put, take, takeLatest } from 'redux-saga/effects';

import { safeLoadAccount } from 'core';
import { mobiusStoreAddress } from 'utils/env';

import { storeAccountActions } from 'state/storeAccount';
import { fetchStart, requestActions } from 'state/requests';

let watcher;

function* reloadStoreAccount() {
  const { storeAccount } = yield call(fetchStart, {
    name: 'reloadStoreAccount',
    fetcher: safeLoadAccount,
    payload: mobiusStoreAddress,
    serialize: result => ({
      storeAccount: result,
    }),
  });

  if (storeAccount) {
    yield put(storeAccountActions.setStoreAccount(storeAccount));
  }
}

function* watch(delayDuration = 2000) {
  while (true) {
    yield call(reloadStoreAccount);
    yield call(delay, delayDuration);
  }
}

function* stopWatch() {
  yield take(storeAccountActions.stopWatchStoreAccount);
  yield cancel(watcher);
  yield put(requestActions.resetRequest('reloadStoreAccount'));

  watcher = null;
}

function* run() {
  if (watcher) {
    return;
  }

  watcher = yield fork(watch);
  yield fork(stopWatch);
}

export default takeLatest(storeAccountActions.watchStoreAccount, run);
