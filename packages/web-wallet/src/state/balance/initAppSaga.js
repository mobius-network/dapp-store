import { takeLatest, call, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { isAuthorized } from 'state/auth/selectors';

import { prepareAccount } from './watchAccountSaga';
import { getMasterAccount } from './selectors';

export function* initApp() {
  const masterAccount = yield select(getMasterAccount);
  const authorized = yield select(isAuthorized);

  if (masterAccount || !authorized) {
    return;
  }

  yield call(prepareAccount);
}

export default takeLatest(REHYDRATE, initApp);
