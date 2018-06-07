import { Operation } from 'stellar-sdk';
import { takeLatest, select, call, put } from 'redux-saga/effects';

import {
  submitTransaction,
  createAppAccount,
  assets,
} from '@mobius-network/core';

import { requestActions } from 'state/requests/reducer';
import { accountActions, getMasterAccount } from 'state/account';
import { getPublicKeyFor, getSecretKeyFor } from 'state/auth/selectors';
import { appActions, getAppAccount } from 'state/apps';

export function* addToAppAccount(app, amount) {
  const destination = yield select(getPublicKeyFor(app.id));

  yield put(accountActions.transact, {
    name: 'depositApp',
    operation: Operation.payment({
      destination,
      amount: String(amount),
      asset: assets.mobi,
    }),
  });
}

export function* createApp(app, amount) {
  const account = yield select(getMasterAccount);
  const masterSecretKey = yield select(getSecretKeyFor);
  const appSecretKey = yield select(getSecretKeyFor, app.id);

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
}

export function* depositApp({ payload: { app, amount } }) {
  const appAccount = yield select(getAppAccount, app.id);

  const handler = appAccount ? addToAppAccount : createApp;

  yield call(handler, app, amount);
}

export default takeLatest(appActions.depositApp, depositApp);
