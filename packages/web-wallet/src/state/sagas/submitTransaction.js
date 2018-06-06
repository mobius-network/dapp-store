import { takeLatest, put, select } from 'redux-saga/effects';
import { submitTransaction } from '@mobius-network/core';

import { requestActions } from 'state/requests/reducer';
import { balanceActions } from 'state/balance/reducer';
import { getKeypairFor } from 'state/auth/selectors';
import { getMasterAccount } from 'state/balance/selectors';

function* transact({ payload: { operation, name }, meta }) {
  const account = yield select(getMasterAccount);
  const keypair = yield select(getKeypairFor);

  yield put(requestActions.fetchStart(
    {
      name,
      fetcher: submitTransaction,
      payload: [operation, account, keypair],
    },
    meta
  ));
}

export default takeLatest(balanceActions.transact, transact);
