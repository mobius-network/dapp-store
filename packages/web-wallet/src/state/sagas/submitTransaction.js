import { takeLatest, call, select } from 'redux-saga/effects';
import { submitTransaction } from '@mobius-network/core';

import { balanceActions } from 'state/balance/reducer';
import { getKeypairFor } from 'state/auth/selectors';
import { getMasterAccount } from 'state/balance/selectors';

// TODO: add transaction status tracking to Redux store
function* transact({ payload: operation, meta: { resolve, reject } }) {
  const account = yield select(getMasterAccount);
  const keypair = yield select(getKeypairFor);

  try {
    const response = yield call(submitTransaction, operation, account, keypair);

    resolve(response);
  } catch (err) {
    reject(err);
  }
}

export default takeLatest(balanceActions.transact, transact);
