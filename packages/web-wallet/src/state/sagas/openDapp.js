import { takeLatest, take, select, put } from 'redux-saga/effects';
import { Auth } from '@mobius-network/mobius-client-js';

import { getSecretKeyFor, getPublicKeyFor } from 'state/auth/selectors';
import { appActions } from 'state/apps/reducer';
import { requestActions } from 'state/requests/reducer';
import { matchFetchSuccess } from 'state/requests/matchers';

export function* openDapp({ payload: app }) {
  yield put(requestActions.fetchStart({
    name: 'getChallenge',
    payload: `${app.url}/auth`,
  }));

  const {
    payload: { data: challenge },
  } = yield take(matchFetchSuccess('getChallenge'));
  const appSecretKey = yield select(getSecretKeyFor, { accountNumber: app.id });

  const signedChallenge = Auth.Sign.call(
    appSecretKey,
    challenge,
    app.stellar_public_key
  );

  const appPublicKey = yield select(getPublicKeyFor, { accountNumber: app.id });

  yield put(requestActions.fetchStart({
    name: 'postChallenge',
    method: 'POST',
    payload: [
      `${app.url}/auth`,
      {
        xdr: signedChallenge,
        public_key: appPublicKey,
      },
    ],
  }));

  const {
    payload: { data: token },
  } = yield take(matchFetchSuccess('postChallenge'));

  window.open(`${app.url}/?token=${token}`, '_blank');
}

export default takeLatest(appActions.openDapp, openDapp);
