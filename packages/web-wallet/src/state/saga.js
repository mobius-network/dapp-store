import { fork, all } from 'redux-saga/effects';

import { authSagas } from './auth';
import { balanceSagas } from './balance';

export default function* rootSaga() {
  yield all([fork(authSagas), fork(balanceSagas)]);
}
