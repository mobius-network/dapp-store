import { takeLatest, call, put } from 'redux-saga/effects';
import { findBestPath } from '@mobius-network/core';

import { transfersActions } from 'state/transfers/reducer';

export function* find({ payload }) {
  yield put(transfersActions.setBestPath(undefined));

  const paymentPath = yield call(findBestPath, payload);

  yield put(transfersActions.setBestPath(paymentPath));
}

export default takeLatest(transfersActions.findBestPath, find);
