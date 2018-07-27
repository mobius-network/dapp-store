import { takeEvery, call, put, select } from 'redux-saga/effects';
import { isNil } from 'lodash';
import { safeLoadAccount } from '@mobius-network/core';

import { getIpfsFiles } from 'utils/ipfs';
import { fetchStart } from 'state/requests';
import { getDappCatalogEntry } from 'state/storeAccount';
import { userAccountsActions } from 'state/userAccounts';

function* loadUserAccount(accountNumber, publicKey) {
  const { userAccount } = yield call(fetchStart, {
    name: `loadUserAccountWithDapp_${accountNumber}`,
    fetcher: safeLoadAccount,
    payload: publicKey,
    serialize: result => ({
      userAccount: result,
    }),
  });

  if (userAccount) {
    yield put(userAccountsActions.setUserAccountData({
      id: accountNumber,
      data: { userAccount },
    }));
  }

  return userAccount;
}

function* loadDappDetails(accountNumber, ipfsPath) {
  const { dappDetails } = yield call(fetchStart, {
    name: `loadUserAccountWithDapp_${accountNumber}`,
    fetcher: getIpfsFiles,
    payload: ipfsPath,
    serialize: result => ({
      dappDetails: result,
    }),
  });

  if (dappDetails) {
    yield put(userAccountsActions.setUserAccountData({
      id: accountNumber,
      data: { dappDetails },
    }));
  }

  return dappDetails;
}

function* run({ payload: { accountNumber, publicKey } }) {
  const userAccount = yield call(loadUserAccount, accountNumber, publicKey);

  if (isNil(userAccount)) {
    return;
  }

  const dappCatalogEntry = yield select(getDappCatalogEntry, {
    entryId: publicKey,
  });

  if (isNil(dappCatalogEntry)) {
    return;
  }

  yield put(userAccountsActions.setUserAccountData({
    id: accountNumber,
    data: { dappStatus: dappCatalogEntry.status },
  }));

  yield call(loadDappDetails, accountNumber, dappCatalogEntry.ipfsPath);
}

export default takeEvery(userAccountsActions.loadUserAccountWithDapp, run);
