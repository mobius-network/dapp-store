import { takeEvery, call, select } from 'redux-saga/effects';
import { isNil } from 'lodash';

import { getIpfsFiles } from 'utils/ipfs';
import { fetchStart } from 'state/requests';
import { getDappCatalogEntry } from 'state/storeAccount';
import { userAccountsActions } from 'state/userAccounts';

import loadUserAccount from './shared/loadUserAccount';

function* loadDappDetails(accountNumber, ipfsPath) {
  const { dappDetails } = yield call(fetchStart, {
    name: `loadDappDetails_${accountNumber}`,
    fetcher: getIpfsFiles,
    payload: ipfsPath,
    serialize: result => ({
      dappDetails: result,
      entities: {
        userDapps: {
          [accountNumber]: result,
        },
      },
    }),
  });

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

  yield call(loadDappDetails, accountNumber, dappCatalogEntry.ipfsPath);
}

export default takeEvery(userAccountsActions.loadUserAccountWithDapp, run);
