import { takeLatest, call, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { getIsAuthorized } from 'state/auth/selectors';

import { getMasterAccount } from 'state/account/selectors';
import { prepareAccount } from './watchAccount';

export function* initApp() {
  const masterAccount = yield select(getMasterAccount);
  const isAuthorized = yield select(getIsAuthorized);

  if (masterAccount || !isAuthorized) {
    return;
  }

  yield call(prepareAccount);
}

export default takeLatest(REHYDRATE, initApp);
