import { delay } from 'redux-saga';
import { all, fork, call, select, take, put, cancel } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';

import { safeLoadAccount } from '@mobius-network/core';
import { apiUrl } from 'utils';

import { createSaga } from 'state/utils';
import { fetchStart, requestActions } from 'state/requests';
import { getPublicKeyFor, getIsAuthorized } from 'state/auth/selectors';
import { authActions } from 'state/auth/reducer';
import { appActions } from 'state/apps/reducer';
import { getApps } from 'state/apps/selectors';
import { notificationsActions } from 'state/notifications';

const watchers = {};

export function* loadAppAccount(app) {
  const publicKey = yield select(getPublicKeyFor, { accountNumber: app.id });

  try {
    const { appAccount } = yield call(fetchStart, {
      name: 'loadAppAccount',
      fetcher: safeLoadAccount,
      payload: publicKey,
      serialize: result => ({
        appAccount: result,
        entities: {
          appAccounts: {
            [app.id]: result,
          },
        },
      }),
    });

    return { account: appAccount, app };
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));
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

    yield put(requestActions.deleteEntities({
      appAccounts: [appId],
    }));
  }
}

export function* loadAppAccounts() {
  const apps = yield select(getApps);

  // Attempt to load all accounts
  const pairs = yield all(apps.map(app => call(loadAppAccount, app)));

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
  yield call(
    fetchStart,
    {
      name: 'apps',
      payload: `${apiUrl}/app_store/all`,
      serialize: ({ apps }) => {
        const appModel = new schema.Entity('apps');

        return normalize(apps, [appModel]);
      },
    },
    meta
  );

  const isAuthorized = yield select(getIsAuthorized);

  if (isAuthorized) {
    yield fork(loadAppAccounts);
  }
}

export default createSaga('loadApps', loadApps);
