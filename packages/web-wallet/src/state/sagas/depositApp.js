import { Operation } from 'stellar-sdk';
import { takeLatest, select, spawn, call, put } from 'redux-saga/effects';

import {
  submitTransaction,
  createAppAccount,
  assets,
} from '@mobius-network/core';

import { fetchStart } from 'state/requests/reducer';
import { accountActions, getMasterAccount } from 'state/account';
import { getPublicKeyFor, getSecretKeyFor } from 'state/auth/selectors';
import { appActions, getAppAccount } from 'state/apps';
import { notificationsActions } from 'state/notifications';

import { startAppAccountWatcher } from './loadApps';

export function* addToAppAccount(app, amount, meta) {
  const destination = yield select(getPublicKeyFor, {
    accountNumber: app.id,
  });

  yield put(accountActions.transact(
    {
      name: 'depositApp',
      operation: Operation.payment({
        destination,
        amount: String(amount),
        asset: assets.mobi,
      }),
    },
    meta
  ));
}

export function* createApp(app, amount, meta) {
  const account = yield select(getMasterAccount);
  const masterSecretKey = yield select(getSecretKeyFor);
  const appSecretKey = yield select(getSecretKeyFor, { accountNumber: app.id });

  const createAppTransaction = createAppAccount({
    developerPublicKey: app.stellar_public_key,
    masterSecretKey,
    appSecretKey,
    amount,
    account,
  });

  yield call(
    fetchStart,
    {
      name: 'createAppAccount',
      payload: createAppTransaction,
      fetcher: submitTransaction,
    },
    meta
  );

  yield spawn(startAppAccountWatcher, app);
}

export function* depositApp({ payload: { app, amount }, meta }) {
  try {
    const appAccount = yield select(getAppAccount, { appId: app.id });

    const handler = appAccount ? addToAppAccount : createApp;

    yield call(handler, app, amount, meta);
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));
  }
}

export default takeLatest(appActions.depositApp, depositApp);
