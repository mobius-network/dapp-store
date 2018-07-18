import { all } from 'redux-saga/effects';

import createUserAccountSaga from './createUserAccount';
import depositAppSaga from './depositApp';
import downloadKeypairSaga from './downloadKeypair';
import initAppSaga from './initApp';
import loadAppsSaga from './loadApps';
import reloadMasterAccountSaga from './reloadMasterAccount';
import loginSaga from './login';
import openDappSaga from './openDapp';
import releaseBalanceSaga from './releaseBalance';
import requestSaga from './request';
import signupSaga from './signup';
import submitTransactionSaga from './submitTransaction';
import watchAccountSaga from './watchAccount';

export default function* () {
  yield all([
    createUserAccountSaga,
    depositAppSaga,
    downloadKeypairSaga,
    initAppSaga,
    loadAppsSaga.listener,
    loginSaga,
    openDappSaga,
    releaseBalanceSaga.listener,
    requestSaga,
    signupSaga,
    submitTransactionSaga,
    reloadMasterAccountSaga,
    watchAccountSaga,
  ]);
}
