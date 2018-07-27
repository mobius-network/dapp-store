import { delay } from 'redux-saga';
import { call, cancel, fork, put, take, takeLatest } from 'redux-saga/effects';

import { storeAccountActions } from 'state/storeAccount';
import { requestActions } from 'state/requests';

import loadStoreAccount from './loadStoreAccount';

let watcher;

function* watch(delayDuration = 2000) {
  while (true) {
    yield call(loadStoreAccount);
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
