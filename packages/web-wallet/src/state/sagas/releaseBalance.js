import { call, select, put } from 'redux-saga/effects';

import { submitTransaction, mergeAppAccount } from '@mobius-network/core';

import { createSaga } from 'state/utils';
import { fetchStart } from 'state/requests/reducer';
import { getPublicKeyFor, getSecretKeyFor } from 'state/auth/selectors';
import { appActions, getAppAccount } from 'state/apps';

export function* releaseAppBalance({ payload: { app, name }, meta }) {
  const appAccount = yield select(getAppAccount, { appId: app.id });
  const appSecretKey = yield select(getSecretKeyFor, {
    accountNumber: app.id,
  });

  const masterAccountPublicKey = yield select(getPublicKeyFor);

  const transaction = mergeAppAccount({
    appAccount,
    appSecretKey,
    masterAccountPublicKey,
  });

  yield call(fetchStart, {
    name,
    payload: transaction,
    fetcher: submitTransaction,
  });

  yield put(appActions.stopWatching(app.id));

  meta.resolve();
}

export default createSaga('releaseAppBalance', releaseAppBalance);
