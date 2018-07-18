import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder } from 'stellar-sdk';
import {
  safeLoadAccount,
  submitTransaction,
  assets,
} from '@mobius-network/core';

import { submitDappActions, submitSteps } from 'state/submitDapp';
import { fetchStart, requestActions } from 'state/requests';
import { getMasterAccount, getMasterAccountData } from 'state/account';
import { getKeypairFor, getUserAccountKeypair } from 'state/auth';

import { reloadMasterAccount } from './reloadMasterAccount';

function* createUserAccount() {
  yield call(reloadMasterAccount);

  const masterAccount = yield select(getMasterAccount);
  const masterAccountKeypair = yield select(getKeypairFor);
  const data = yield select(getMasterAccountData);

  const appCount = Object.prototype.hasOwnProperty.call(data, 'appCount')
    ? data.appCount + 1
    : 1;

  const userAccountKeypair = yield select(getUserAccountKeypair, {
    accountNumber: appCount,
  });

  const tx = new TransactionBuilder(masterAccount)
    .addOperation(Operation.createAccount({
      destination: userAccountKeypair.publicKey(),
      source: masterAccountKeypair.publicKey(),
      startingBalance: '3',
    }))
    .addOperation(Operation.changeTrust({
      source: userAccountKeypair.publicKey(),
      asset: assets.mobi,
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
  tx.sign(userAccountKeypair);

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
    yield put(submitDappActions.setUserAccount({
      userAccount,
      userAccountNumber: appCount,
    }));
    yield put(submitDappActions.setSubmitStep(submitSteps.form));
  }

  yield put(requestActions.resetRequest('createUserAccount'));
  yield put(requestActions.resetRequest('loadUserAccount'));
}

export default takeLatest(
  submitDappActions.createUserAccount,
  createUserAccount
);
