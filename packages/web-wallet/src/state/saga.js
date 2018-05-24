import { fork, all } from 'redux-saga/effects';

import { signupSaga } from './auth';

export default function* rootSaga() {
  yield all([
    fork(signupSaga),
  ]);
}

