import { all } from 'redux-saga/effects';

import {
  createUserAccountSaga,
  mergeUserAccountSaga,
  submitDappSaga,
} from './userAccounts';
import depositAppSaga from './depositApp';
import downloadKeypairSaga from './downloadKeypair';
import initAppSaga from './initApp';
import loadAppsSaga from './loadApps';
import loginSaga from './login';
import openDappSaga from './openDapp';
import releaseBalanceSaga from './releaseBalance';
import reloadMasterAccountSaga from './reloadMasterAccount';
import requestSaga from './request';
import signupSaga from './signup';
import submitTransactionSaga from './submitTransaction';
import watchAccountSaga from './watchAccount';
import { loadStoreAccountSaga, watchStoreAccountSaga } from './storeAccount';

export default function* () {
  yield all([
    createUserAccountSaga,
    depositAppSaga,
    downloadKeypairSaga,
    initAppSaga,
    loadAppsSaga.listener,
    loadStoreAccountSaga,
    loginSaga,
    mergeUserAccountSaga,
    openDappSaga,
    releaseBalanceSaga.listener,
    reloadMasterAccountSaga,
    requestSaga,
    signupSaga,
    submitDappSaga,
    submitTransactionSaga,
    watchAccountSaga,
    watchStoreAccountSaga,
  ]);
}
