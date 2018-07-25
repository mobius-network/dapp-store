import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder, Memo, MemoHash } from 'stellar-sdk';
import {
  safeLoadAccount,
  submitTransaction,
  assets,
} from 'core';
import { addIpfsFiles } from 'utils/ipfs';
import { mobiusStoreAddress, mobiusStoreRegPrice } from 'utils/env';

import {
  submitDappActions,
  getUserAccount,
  getUserAccountNumber,
  getMobiBalance,
  submitSteps,
} from 'state/submitDapp';
import { fetchStart, requestActions } from 'state/requests';
import { getMasterAccount } from 'state/account';
import { getKeypairFor, getUserAccountKeypair } from 'state/auth';

function* fundUserAccount() {
  const masterAccount = yield select(getMasterAccount);
  const masterAccountKeypair = yield select(getKeypairFor);
  const accountNumber = yield select(getUserAccountNumber);
  const userAccountKeypair = yield select(getUserAccountKeypair, {
    accountNumber,
  });

  const paymentOp = Operation.payment({
    amount: mobiusStoreRegPrice,
    asset: assets.mobi,
    destination: userAccountKeypair.publicKey(),
  });

  const tx = new TransactionBuilder(masterAccount)
    .addOperation(paymentOp)
    .build();

  tx.sign(masterAccountKeypair);

  yield call(fetchStart, {
    name: 'fundUserAccount',
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
      userAccountNumber: accountNumber,
    }));
  }

  yield put(requestActions.resetRequests('fundUserAccount', 'loadUserAccount'));
}

function* submit(memoValue) {
  const accountNumber = yield select(getUserAccountNumber);
  const userAccount = yield select(getUserAccount);
  const userAccountKeypair = yield select(getUserAccountKeypair, {
    accountNumber,
  });

  const memo = new Memo(MemoHash, memoValue);

  const paymentOp = Operation.payment({
    amount: mobiusStoreRegPrice,
    asset: assets.mobi,
    destination: mobiusStoreAddress,
  });

  const tx = new TransactionBuilder(userAccount)
    .addMemo(memo)
    .addOperation(paymentOp)
    .build();

  tx.sign(userAccountKeypair);

  yield call(fetchStart, {
    name: 'submitDapp',
    fetcher: submitTransaction,
    payload: tx,
  });

  yield put(requestActions.resetRequest('submitDapp'));
}

function* submitDapp({ payload }) {
  const mobiBalance = yield select(getMobiBalance);

  const { memoValue } = yield call(fetchStart, {
    name: 'addFilesToIpfs',
    fetcher: addIpfsFiles,
    payload,
    serialize: result => ({
      memoValue: result,
    }),
  });

  if (mobiBalance <= parseInt(mobiusStoreRegPrice, 10)) {
    yield call(fundUserAccount);
  }

  yield call(submit, memoValue);
  yield put(submitDappActions.setSubmitStep(submitSteps.completed));
}

export default takeLatest(submitDappActions.submitDapp, submitDapp);
