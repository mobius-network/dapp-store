import { call, put } from 'redux-saga/effects';
import { safeLoadAccount } from '@mobius-network/core';

import { mobiusStoreAddress } from 'utils/env';
import { fetchStart } from 'state/requests';
import { storeAccountActions } from 'state/storeAccount';

export default function* loadStoreAccount() {
  const { storeAccount } = yield call(fetchStart, {
    name: 'loadStoreAccount',
    fetcher: safeLoadAccount,
    payload: mobiusStoreAddress,
    serialize: result => ({
      storeAccount: result,
    }),
  });

  if (storeAccount) {
    yield put(storeAccountActions.setStoreAccount(storeAccount));
  }
}
