import { delay } from 'redux-saga';
import { all, fork, call, select, take, put, cancel } from 'redux-saga/effects';

import { safeLoadAccount } from '@mobius-network/core';
import { apiUrl } from 'utils';

import { createSaga } from 'state/utils';
import { requestActions } from 'state/requests/reducer';
import { matchFetchSuccess } from 'state/requests/matchers';
import { getPublicKeyFor, getIsAuthorized } from 'state/auth/selectors';
import { authActions } from 'state/auth/reducer';
import { appActions } from 'state/apps/reducer';

const watchers = {};

export function* loadAppAccount(app) {
  try {
    const publicKey = yield select(getPublicKeyFor, { accountNumber: app.id });
    const account = yield call(safeLoadAccount, publicKey);

    yield put(appActions.setAppAccount({ account, app }));
    return { account, app };
  } catch (error) {
    // TODO: use fetchStart to `safeLoadAccount` and error handling
    yield put(requestActions.fetchFail({ name: 'loadAppAccount', error }));
    return {};
  }
}

export function* watchAppAccount(app, delayDuration = 2000) {
  while (true) {
    yield call(loadAppAccount, app);
    yield call(delay, delayDuration);
  }
}

export function* startAppAccountWatcher(app) {
  if (!watchers[app.id]) {
    watchers[app.id] = yield fork(watchAppAccount, app);
  }
}

export function* stopAppAccountWatcher() {
  while (true) {
    const { payload: appId } = yield take(appActions.stopWatching);
    yield cancel(watchers[appId]);
    delete watchers[appId];

    yield put(appActions.setAppAccount({ account: undefined, app: { id: appId } }));
  }
}

export function* loadAppAccounts() {
  const {
    payload: { data },
  } = yield take(matchFetchSuccess('apps'));

  // Attempt to load all accounts
  const pairs = yield all(data.apps.map(app => call(loadAppAccount, app)));

  // Start watching only apps with created accounts
  yield all(pairs
    .filter(pair => pair.account)
    .map(pair => fork(startAppAccountWatcher, pair.app)));

  yield fork(stopAppAccountWatcher);

  // Cancel all watchers on logout
  yield take(authActions.logout);
  Object.entries(watchers).forEach(([appId, watcher]) => {
    watcher.cancel();
    delete watchers[appId];
  });
}

export function* loadApps({ meta }) {
  yield put(requestActions.fetchStart(
    {
      name: 'apps',
      payload: `${apiUrl}/app_store/all`,
    },
    meta
  ));

  const isAuthorized = yield select(getIsAuthorized);

  if (isAuthorized) {
    yield fork(loadAppAccounts);
  }
}

export default createSaga('loadApps', loadApps);
