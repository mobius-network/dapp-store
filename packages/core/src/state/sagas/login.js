import { noop } from 'lodash';
import { takeLatest, call, put } from 'redux-saga/effects';
import { decrypt } from '@mobius-network/core';

import { authActions } from '../auth/reducer';
import { notificationsActions } from '../notifications';

export function* login({
  payload,
  meta: { resolve = noop, reject = noop } = {},
}) {
  const { password, keyfile } = payload;

  try {
    const wallet = yield call(decrypt, password, keyfile);

    resolve(wallet);

    yield put(authActions.set({ wallet }));
    yield put(authActions.loginSuccess());
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));

    if (error.message === 'Network Error') {
      reject({ keyfile: 'Network error occured!' });
    } else {
      reject({
        keyfile: 'Wrong password or keyfile corrupted!',
        password: ' ',
      });
    }
  }
}

export default takeLatest(authActions.loginStart, login);
