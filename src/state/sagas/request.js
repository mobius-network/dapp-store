import { identity, noop } from 'lodash';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { dedupeEvery } from 'state/utils';
import { requestActions } from 'state/requests/reducer';
import { notificationsActions } from 'state/notifications';

function* request({
  payload: {
    name,
    payload,
    fetcher = axios,
    method = 'get',
    serialize = identity,
  },
  meta: { resolve = noop, reject = noop } = {},
}) {
  const args = Array.isArray(payload) ? payload : [payload];
  const fetch = fetcher === axios ? fetcher[method.toLowerCase()] : fetcher;

  try {
    const response = yield call(fetch, ...args);
    const data = fetcher === axios ? response.data : response;
    const serialized = serialize(data);

    resolve(serialized);

    yield put(requestActions.fetchSuccess({ name, data: serialized }));
  } catch (error) {
    reject(error);

    yield put(requestActions.fetchFail({ name, error }));
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));

    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export default dedupeEvery(requestActions.fetchStart, request);
