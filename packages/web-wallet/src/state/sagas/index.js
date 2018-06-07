import { all } from 'redux-saga/effects';

import initAppSaga from './initApp';
import watchAccountSaga from './watchAccount';
import signupSaga from './signup';
import downloadKeypairSaga from './downloadKeypair';
import submitTransactionSaga from './submitTransaction';
import loginSaga from './login';
import requestSaga from './request';
import loadAppsSaga from './loadApps';
import depositAppSaga from './depositApp';

export default function* () {
  yield all([
    initAppSaga,
    watchAccountSaga,
    signupSaga,
    downloadKeypairSaga,
    submitTransactionSaga,
    loginSaga,
    requestSaga,
    loadAppsSaga,
    depositAppSaga,
  ]);
}
