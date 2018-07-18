import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Keypair, Operation, TransactionBuilder } from 'stellar-sdk';
import { safeLoadAccount, submitTransaction } from '@mobius-network/core';

import { submitDappActions, submitSteps } from 'state/submitDapp';
import { fetchStart } from 'state/requests';
import { getMasterAccount, getMasterAccountData } from 'state/account';
import { getWallet } from 'state/auth';

import { reloadMasterAccount } from './reloadMasterAccount';

function* createUserAccount() {
  yield call(reloadMasterAccount);

  const masterAccount = yield select(getMasterAccount);
  const data = yield select(getMasterAccountData);
  const wallet = yield select(getWallet);

  const appCount = Object.prototype.hasOwnProperty.call(data, 'appCount')
    ? data.appCount + 1
    : 1;
  const masterAccountKeypair = wallet.getKeypair(0);
  const userAccountKeypair = Keypair.fromRawEd25519Seed(wallet.derive(`m/44'/148'/1868'/0'/${appCount}'`));

  const tx = new TransactionBuilder(masterAccount)
    .addOperation(Operation.createAccount({
      destination: userAccountKeypair.publicKey(),
      source: masterAccountKeypair.publicKey(),
      startingBalance: '3',
    }))
    .addOperation(Operation.manageData({
      name: 'mobius.store.meta',
      value: JSON.stringify({
        ...data,
        appCount,
      }),
    }))
    .build();

  tx.sign(masterAccountKeypair);

  yield call(fetchStart, {
    name: 'createUserAccount',
    fetcher: submitTransaction,
    payload: tx,
  });

  const { userAccount } = yield call(fetchStart, {
    name: 'loadUserAccount',
    fetcher: safeLoadAccount,
    payload: userAccountKeypair.publicKey(),
    serialize: result => ({
      userAccount: result,
    }),
  });

  if (userAccount) {
    yield put(submitDappActions.setUserAccount(userAccount));
    yield put(submitDappActions.setSubmitStep(submitSteps.form));
  }
}

export default takeLatest(
  submitDappActions.createUserAccount,
  createUserAccount
);
