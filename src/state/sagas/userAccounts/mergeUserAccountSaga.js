import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder } from 'stellar-sdk';
import { submitTransaction, assets } from 'core';

import {
  submitDappActions,
  getUserAccount,
  getUserAccountNumber,
  getMobiBalance,
} from 'state/submitDapp';
import { fetchStart } from 'state/requests';
import { getKeypairFor, getUserAccountKeypair } from 'state/auth';
import { notificationsActions } from 'state/notifications';

function* buildTransaction() {
  const masterAccountKeypair = yield select(getKeypairFor);
  const userAccount = yield select(getUserAccount);
  const accountNumber = yield select(getUserAccountNumber);
  const userAccountKeypair = yield select(getUserAccountKeypair, {
    accountNumber,
  });

  try {
    const accountMergeOp = Operation.accountMerge({
      destination: masterAccountKeypair.publicKey(),
    });

    const changeTrustOp = Operation.changeTrust({
      asset: assets.mobi,
      limit: '0',
    });

    let tx = new TransactionBuilder(userAccount);

    const mobiBalance = yield select(getMobiBalance);

    if (mobiBalance > 0) {
      const paymentReturnOp = Operation.payment({
        destination: masterAccountKeypair.publicKey(),
        amount: mobiBalance,
        asset: assets.mobi,
      });

      tx = tx.addOperation(paymentReturnOp);
    }

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
  }

  return undefined;
}

function* run() {
  const tx = yield call(buildTransaction);

  yield call(fetchStart, {
    name: 'mergeUserAccount',
    fetcher: submitTransaction,
    payload: tx,
  });

  yield put(submitDappActions.reset());
}

export default takeLatest(submitDappActions.mergeUserAccount, run);
