import { call } from 'redux-saga/effects';
import { safeLoadAccount } from '@mobius-network/core';

import { fetchStart } from 'state/requests';

export default function* loadUserAccount(accountNumber, publicKey) {
  const { userAccount } = yield call(fetchStart, {
    name: `loadUserAccount_${accountNumber}`,
    fetcher: safeLoadAccount,
    payload: publicKey,
    serialize: result => ({
      userAccount: result,
      entities: {
        userAccounts: {
          [accountNumber]: result,
        },
      },
    }),
  });

  return userAccount;
}
