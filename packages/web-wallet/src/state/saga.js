import { fork, all } from 'redux-saga/effects';

import { authSagas } from './auth';

export default function* rootSaga() {
  yield all([fork(authSagas)]);
}
