import { select, put, take } from 'redux-saga/effects';

import { submitTransaction, mergeAppAccount } from '@mobius-network/core';

import { createSaga } from 'state/utils';
import { requestActions } from 'state/requests/reducer';
import { matchFetchSuccess } from 'state/requests/matchers';
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

  yield put(requestActions.fetchStart({
    name,
    payload: transaction,
    fetcher: submitTransaction,
  }));

  yield take(matchFetchSuccess(name));

  // TODO: verify which app was just released
  yield put(appActions.stopWatching(app.id));

  meta.resolve();
}

export default createSaga('releaseAppBalance', releaseAppBalance);
