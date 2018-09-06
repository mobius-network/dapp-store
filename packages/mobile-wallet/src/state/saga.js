import { all } from 'redux-saga/effects';

import watchAccountSaga from './sagas/watchAccount';
import submitTransactionSaga from './sagas/submitTransaction';
import watchPricesSaga from './sagas/watchPrices';
import { loginSaga, signupFinishSaga, signupStartSaga } from './sagas/auth';

export default function* rootSaga() {
  yield all([
    loginSaga,
    signupFinishSaga,
    signupStartSaga,
    submitTransactionSaga,
    watchAccountSaga,
    watchPricesSaga,
  ]);
}
