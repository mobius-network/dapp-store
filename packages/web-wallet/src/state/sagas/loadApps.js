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

import { requestActions } from 'state/requests/reducer';
import { getPublicKeyFor, getIsAuthorized } from 'state/auth/selectors';
import { authActions } from 'state/auth/reducer';
import { appActions } from 'state/apps/reducer';

const appsLoadedAction = ({ type, payload = {} }) =>
  type === requestActions.fetchSuccess.type && payload.name === 'apps';

const watchers = {};

export function* loadApp(app) {
  const publicKey = yield select(getPublicKeyFor, app.id);
  const account = yield call(safeLoadAccount, publicKey);

  yield put(appActions.setAppAccount({ account, app }));
  return { account, app };
}

export function* watchApp(app, delayDuration = 2000) {
  while (true) {
    yield call(loadApp, app);
    yield call(delay, delayDuration);
  }
}

export function* stopAppWatcher() {
  while (true) {
    const { payload: appId } = yield take(appActions.stopWatching);
    yield cancel(watchers[appId]);
    delete watchers[appId];
  }
}

export function* loadAppAccounts() {
  const {
    payload: { data },
  } = yield take(appsLoadedAction);

  // Attempt to load all accounts
  const pairs = yield all(data.apps.map(app => call(loadApp, app)));
  const loadedPairs = pairs.filter(pair => pair.account);

  // Start watching only apps with created accounts
  const watchTasks = yield all(loadedPairs.map(pair => fork(watchApp, pair.app)));
  loadedPairs.forEach(({ app }, idx) => (watchers[app.id] = watchTasks[idx]));

  yield fork(stopAppWatcher);

  // Cancel all watchers on logout
  yield take(authActions.logout);
  Object.entries(watchers).forEach(([appId, watcher]) => {
    watcher.cancel();
    delete watchers[appId];
  });
}

export function* fetchApps() {
  yield put(requestActions.fetchStart({
    name: 'apps',
    payload: `${apiUrl}/app_store/all`,
  }));

  const isAuthorized = yield select(getIsAuthorized);

  if (isAuthorized) {
    yield fork(loadAppAccounts);
  }
}

export default takeLatest(appActions.loadApps, fetchApps);
