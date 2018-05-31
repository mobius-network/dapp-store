import { all } from 'redux-saga/effects';

import initAppSaga from './initApp';
import watchAccountSaga from './watchAccount';
import signupSaga from './signup';
import downloadKeypairSaga from './downloadKeypair';

export default function* () {
  yield all([initAppSaga, watchAccountSaga, signupSaga, downloadKeypairSaga]);
}
