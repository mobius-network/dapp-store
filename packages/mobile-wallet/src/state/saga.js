import { all } from 'redux-saga/effects';

// import {
//   watchAccountSaga,
//   signupSaga,
//   submitTransactionSaga,
//   loginSaga,
// } from '@mobius-network/core';

import watchAccountSaga from './sagas/watchAccount';
import signupSaga from './sagas/signup';
import submitTransactionSaga from './sagas/submitTransaction';
import loginSaga from './sagas/login';

export default function* rootSaga() {
  yield all([watchAccountSaga, signupSaga, submitTransactionSaga, loginSaga]);
}