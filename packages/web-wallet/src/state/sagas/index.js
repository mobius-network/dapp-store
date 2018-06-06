import { all } from 'redux-saga/effects';

import initAppSaga from './initApp';
import watchAccountSaga from './watchAccount';
import signupSaga from './signup';
import downloadKeypairSaga from './downloadKeypair';
import submitTransactionSaga from './submitTransaction';
import loginSaga from './login';
import requestSaga from './request';

export default function* () {
  yield all([
    initAppSaga,
    watchAccountSaga,
    signupSaga,
    downloadKeypairSaga,
    submitTransactionSaga,
    loginSaga,
    requestSaga,
  ]);
}
