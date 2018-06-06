import { delay } from 'redux-saga';
import {
  all,
  takeLatest,
  fork,
  call,
  select,
  take,
  put,
  cancel,
} from 'redux-saga/effects';

import { safeLoadAccount } from '@mobius-network/core';
import { apiUrl } from 'utils';

import { requestActions } from 'state/requests';
import { getPublicKeyFor } from 'state/auth';
import { appActions } from 'state/apps';

export function* loadApp(app) {
  const publicKey = yield select(getPublicKeyFor, app.id);
  const account = yield call(safeLoadAccount, publicKey);

  console.log(app, account);
}

export function* watchApps(apps, delayDuration = 2000) {
  while (true) {
    yield all(apps.map(app => call(loadApp, app)));
    yield call(delay, delayDuration);
  }
}

export function* fetchApps() {
  yield put(requestActions.fetchStart({
    name: 'apps',
    payload: `${apiUrl}/app_store/all`,
  }));

  const {
    payload: { data },
  } = yield take(({ type, payload: { name } = {} }) =>
    type === requestActions.fetchSuccess.type && name === 'apps');

  const appsWatcher = yield fork(watchApps, data.apps);

  yield take(appActions.stopWatching);
  yield cancel(appsWatcher);
}

export default takeLatest(appActions.loadApps, fetchApps);
