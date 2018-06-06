import { noop } from 'lodash';
import { takeLatest, call, put } from 'redux-saga/effects';

import { requestActions } from 'state/requests/reducer';

function* request({
  payload: { name, payload, fetcher = fetch },
  meta: { resolve = noop, reject = noop } = {},
}) {
  const args = Array.isArray(payload) ? payload : [payload];

  try {
    const response = yield call(fetcher, ...args);

    resolve(response);
    yield put(requestActions.fetchSuccess({ name, response }));
  } catch ({ response, message, stack }) {
    const error = { message, stack, ...response };

    reject(error);
    yield put(requestActions.fetchFail({ name, error }));

    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export default takeLatest(requestActions.fetchStart, request);
