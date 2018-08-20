import { call, takeLatest } from 'redux-saga/effects';

import { storeAccountActions } from 'state/storeAccount';

import loadStoreAccount from './loadStoreAccount';

function* run() {
  yield call(loadStoreAccount);
}

export default takeLatest(storeAccountActions.loadStoreAccount, run);
