import { noop } from 'lodash';
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import { requestActions } from 'state/requests/reducer';

function* request({
  payload: {
    name, payload, fetcher = axios, method = 'get',
  },
  meta: { resolve = noop, reject = noop } = {},
}) {
  const args = Array.isArray(payload) ? payload : [payload];
  const fetch = fetcher === axios ? fetcher[method.toLowerCase()] : fetcher;

  try {
    const response = yield call(fetch, ...args);
    const data = fetcher === axios ? response.data : response;

    resolve(data);
    yield put(requestActions.fetchSuccess({ name, data }));
  } catch ({ response, message, stack }) {
    const error = { message, stack, ...response };

    reject(error);
    yield put(requestActions.fetchFail({ name, error }));

    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export default takeLatest(requestActions.fetchStart, request);
