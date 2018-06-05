import { all } from 'redux-saga/effects';

import initAppSaga from './initApp';
import watchAccountSaga from './watchAccount';
import signupSaga from './signup';
import downloadKeypairSaga from './downloadKeypair';
import bestPathSaga from './bestPath';
import submitTransactionSaga from './submitTransaction';
import loginSaga from './login';

export default function* () {
  yield all([
    initAppSaga,
    watchAccountSaga,
    signupSaga,
    downloadKeypairSaga,
    bestPathSaga,
    submitTransactionSaga,
    loginSaga,
  ]);
}
