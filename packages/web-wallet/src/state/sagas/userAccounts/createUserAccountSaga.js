import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Operation, TransactionBuilder } from 'stellar-sdk';
import {
  safeLoadAccount,
  submitTransaction,
  assets,
} from '@mobius-network/core';
import { get } from 'lodash';

import { submitDappActions, submitSteps } from 'state/submitDapp';
import { fetchStart, requestActions } from 'state/requests';
import { getMasterAccount, getMasterAccountData } from 'state/account';
import { getKeypairFor, getUserAccountKeypair } from 'state/auth';
import { notificationsActions } from 'state/notifications';

import { reloadMasterAccount } from '../reloadMasterAccount';

/**
 * Build transaction which will
 * - create userAccount funded with 3XLM
 * - create MOBI trustilne
 * - update masterAccount data with `appCount` field incremented by 1
 *
 * @param {StellarSdk.Keypair} userAccountKeypair
 * @param {object} data
 * @param {number} appCount
 * @returns {Transaction} transaction signed by masterAccount & userAccount
 */
function* buildTransation(userAccountKeypair, data, appCount) {
  const masterAccount = yield select(getMasterAccount);
  const masterAccountKeypair = yield select(getKeypairFor);

  try {
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

    return tx;
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));

    throw error;
  }
}

function* run() {
  yield call(reloadMasterAccount);

  const data = yield select(getMasterAccountData);

  const appCount = get(data, 'appCount', 0) + 1;

  const userAccountKeypair = yield select(getUserAccountKeypair, {
    accountNumber: appCount,
  });

  const tx = yield call(buildTransation, userAccountKeypair, data, appCount);

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

    yield put(submitDappActions.setSubmitStep(submitSteps.setup));
  }

  yield put(requestActions.resetRequests(['createUserAccount', 'loadUserAccount']));
}

export default takeLatest(submitDappActions.createUserAccount, run);
