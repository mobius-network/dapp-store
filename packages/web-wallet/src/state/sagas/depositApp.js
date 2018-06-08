import { Operation } from 'stellar-sdk';
import { takeLatest, take, select, spawn, call, put } from 'redux-saga/effects';

import {
  submitTransaction,
  createAppAccount,
  assets,
} from '@mobius-network/core';

import { requestActions } from 'state/requests/reducer';
import { matchFetchSuccess } from 'state/requests/matchers';
import { accountActions, getMasterAccount } from 'state/account';
import { getPublicKeyFor, getSecretKeyFor } from 'state/auth/selectors';
import { appActions, getAppAccount } from 'state/apps';

import { startAppAccountWatcher } from './loadApps';

export function* addToAppAccount(app, amount) {
  const destination = yield select(getPublicKeyFor, {
    accountNumber: app.id,
  });

  yield put(accountActions.transact({
    name: 'depositApp',
    operation: Operation.payment({
      destination,
      amount: String(amount),
      asset: assets.mobi,
    }),
  }));
}

export function* createApp(app, amount) {
  const account = yield select(getMasterAccount);
  const masterSecretKey = yield select(getSecretKeyFor);
  const appSecretKey = yield select(getSecretKeyFor, { accountNumber: app.id });

  const transaction = createAppAccount({
    developerPublicKey: app.stellar_public_key,
    masterSecretKey,
    appSecretKey,
    amount,
    account,
  });

  yield put(requestActions.fetchStart({
    name: 'createAppAccount',
    payload: transaction,
    fetcher: submitTransaction,
  }));

  yield take(matchFetchSuccess('createAppAccount'));
  yield call(startAppAccountWatcher, app);
}

export function* depositApp({ payload: { app, amount } }) {
  const appAccount = yield select(getAppAccount, { appId: app.id });

  const handler = appAccount ? addToAppAccount : createApp;

  yield spawn(handler, app, amount);
}

export default takeLatest(appActions.depositApp, depositApp);
