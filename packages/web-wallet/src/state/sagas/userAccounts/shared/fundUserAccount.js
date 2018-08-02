import { call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder } from 'stellar-sdk';
import { submitTransaction, assets } from '@mobius-network/core';

import { mobiusStoreRegPrice } from 'utils/env';
import { fetchStart } from 'state/requests';
import { getMasterAccount } from 'state/account';
import { getKeypairFor, getUserAccountKeypair } from 'state/auth';
import { notificationsActions } from 'state/notifications';

import loadUserAccount from './loadUserAccount';

function* buildTransaction(userAccountKeypair) {
  const masterAccount = yield select(getMasterAccount);
  const masterAccountKeypair = yield select(getKeypairFor);

  try {
    const tx = new TransactionBuilder(masterAccount)
      .addOperation(Operation.payment({
        amount: mobiusStoreRegPrice,
        asset: assets.mobi,
        destination: userAccountKeypair.publicKey(),
      }))
      .build();

    tx.sign(masterAccountKeypair);

    return tx;
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));

    throw error;
  }
}

export default function* fundUserAccount(accountNumber) {
  const userAccountKeypair = yield select(getUserAccountKeypair, {
    accountNumber,
  });

  const tx = yield call(buildTransaction, userAccountKeypair);

  yield call(fetchStart, {
    name: 'fundUserAccount',
    fetcher: submitTransaction,
    payload: tx,
  });

  const userAccount = yield call(
    loadUserAccount,
    accountNumber,
    userAccountKeypair.publicKey()
  );

  return userAccount;
}
