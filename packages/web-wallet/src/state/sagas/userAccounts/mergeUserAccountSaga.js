import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder } from 'stellar-sdk';
import { submitTransaction, assets } from '@mobius-network/core';

import { userAccountsActions } from 'state/userAccounts';
import { fetchStart, requestActions } from 'state/requests';
import { getKeypairFor, getUserAccountKeypair } from 'state/auth';
import { notificationsActions } from 'state/notifications';

function* buildTransaction(accountNumber, userAccount, mobiBalance) {
  const masterAccountKeypair = yield select(getKeypairFor);
  const userAccountKeypair = yield select(getUserAccountKeypair, {
    accountNumber,
  });

  try {
    let tx = new TransactionBuilder(userAccount);

    if (mobiBalance > 0) {
      const paymentReturnOp = Operation.payment({
        destination: masterAccountKeypair.publicKey(),
        amount: mobiBalance,
        asset: assets.mobi,
      });

      tx = tx.addOperation(paymentReturnOp);
    }

    const changeTrustOp = Operation.changeTrust({
      asset: assets.mobi,
      limit: '0',
    });

    const accountMergeOp = Operation.accountMerge({
      destination: masterAccountKeypair.publicKey(),
    });

    tx = tx
      .addOperation(changeTrustOp)
      .addOperation(accountMergeOp)
      .build();

    tx.sign(userAccountKeypair);

    return tx;
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));

    throw error;
  }
}

function* run({
  payload: {
    callbackAction,
    userAccount,
    userAccountBalance,
    userAccountNumber,
  },
}) {
  const tx = yield call(
    buildTransaction,
    userAccountNumber,
    userAccount,
    userAccountBalance
  );

  yield call(fetchStart, {
    name: 'mergeUserAccount',
    fetcher: submitTransaction,
    payload: tx,
  });

  yield put(requestActions.resetRequest('mergeUserAccount'));

  if (callbackAction) {
    yield put(callbackAction());
  }
}

export default takeLatest(userAccountsActions.mergeUserAccount, run);
