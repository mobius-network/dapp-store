import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder, Memo, MemoHash } from 'stellar-sdk';
import { submitTransaction, assets } from '@mobius-network/core';
import { addIpfsFiles } from 'utils/ipfs';
import { mobiusStoreAddress, mobiusStoreRegPrice } from 'utils/env';

import { userAccountsActions } from 'state/userAccounts';
import { fetchStart, requestActions } from 'state/requests';
import { getUserAccountKeypair } from 'state/auth';

import fundUserAccount from './shared//fundUserAccount';

function* submit(memoValue, userAccount, accountNumber) {
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

function* run({
  payload: {
    callbackAction,
    formValues,
    userAccount,
    userAccountBalance,
    userAccountNumber,
  },
}) {
  const { memoValue } = yield call(fetchStart, {
    name: 'addFilesToIpfs',
    fetcher: addIpfsFiles,
    payload: formValues,
    serialize: result => ({
      memoValue: result,
    }),
  });

  if (userAccountBalance <= parseInt(mobiusStoreRegPrice, 10)) {
    yield call(fundUserAccount, userAccountNumber);
  }

  yield call(submit, memoValue, userAccount, userAccountNumber);

  if (callbackAction) {
    yield put(callbackAction());
  }
}

export default takeLatest(userAccountsActions.submitDapp, run);
