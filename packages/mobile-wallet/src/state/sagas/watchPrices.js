import { delay } from 'redux-saga';
import {
  call, cancel, fork, put, take, takeLatest,
} from 'redux-saga/effects';

import { getMarketQuotes } from 'services/coinmarketcap';
import { pricesActions } from '../prices/actions';

let watcher;

function* getPrices() {
  const {
    data: { data },
  } = yield call(getMarketQuotes);

  yield put(pricesActions.setQuotes(data));
}

function* watch(delayDuration = 60000) {
  while (true) {
    yield call(getPrices);
    yield call(delay, delayDuration);
  }
}

function* stopWatch() {
  yield take(pricesActions.stopWatchPrices);
  yield cancel(watcher);

  watcher = null;
}

function* run() {
  if (watcher) {
    return;
  }

  watcher = yield fork(watch);
  yield fork(stopWatch);
}

export default takeLatest(pricesActions.watchPrices, run);
