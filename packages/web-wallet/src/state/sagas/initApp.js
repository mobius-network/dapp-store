import { takeLatest, call, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { getIsAuthorized, getAccountPending } from 'state/auth/selectors';

import { getMasterAccount } from 'state/balance/selectors';
import { prepareAccount } from './watchAccount';

export function* initApp() {
  const masterAccount = yield select(getMasterAccount);
  const isAuthorized = yield select(getIsAuthorized);
  const accountPending = yield select(getAccountPending);

  if (masterAccount || !isAuthorized || accountPending) {
    return;
  }

  yield call(prepareAccount);
}

export default takeLatest(REHYDRATE, initApp);
