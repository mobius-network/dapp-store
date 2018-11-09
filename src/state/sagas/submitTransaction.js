import { takeLatest, put, select } from 'redux-saga/effects';
import { submitOperation } from 'core';

import { requestActions } from 'state/requests';
import { accountActions } from 'state/account/reducer';
import { getKeypairFor } from 'state/auth/selectors';
import { getMasterAccount } from 'state/account/selectors';

function* transact({ payload: { operation, name }, meta }) {
  const account = yield select(getMasterAccount);
  const keypair = yield select(getKeypairFor);

  yield put(requestActions.fetchStart(
    {
      name,
      fetcher: submitOperation,
      payload: [operation, account, keypair],
    },
    meta
  ));
}

export default takeLatest(accountActions.transact, transact);
