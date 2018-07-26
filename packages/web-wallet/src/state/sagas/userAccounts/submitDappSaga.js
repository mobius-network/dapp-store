import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder, Memo, MemoHash } from 'stellar-sdk';
import { submitTransaction, assets } from '@mobius-network/core';
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
import { getUserAccountKeypair } from 'state/auth';

import fundUserAccount from './fundUserAccount';

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

function* run({ payload }) {
  const mobiBalance = yield select(getMobiBalance);
  const accountNumber = yield select(getUserAccountNumber);

  const { memoValue } = yield call(fetchStart, {
    name: 'addFilesToIpfs',
    fetcher: addIpfsFiles,
    payload,
    serialize: result => ({
      memoValue: result,
    }),
  });

  if (mobiBalance <= parseInt(mobiusStoreRegPrice, 10)) {
    const userAccount = yield call(fundUserAccount, accountNumber);

    if (userAccount) {
      yield put(submitDappActions.setUserAccount({
        userAccount,
        userAccountNumber: accountNumber,
      }));
    }
  }

  yield call(submit, memoValue);

  yield put(submitDappActions.setSubmitStep(submitSteps.completed));
}

export default takeLatest(submitDappActions.submitDapp, run);
