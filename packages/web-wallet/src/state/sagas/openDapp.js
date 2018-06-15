import { takeLatest, take, select, put } from 'redux-saga/effects';
import { Auth } from '@mobius-network/mobius-client-js';

import { getSecretKeyFor, getPublicKeyFor } from 'state/auth/selectors';
import { appActions } from 'state/apps/reducer';
import { requestActions } from 'state/requests/reducer';
import { matchFetchSuccess } from 'state/requests/matchers';

export function* openDapp({ payload: app }) {
  const tab = window.open('', '_blank');

  try {
    yield put(requestActions.fetchStart({
      name: 'getChallenge',
      payload: app.auth_url,
    }));

    const {
      payload: { data: challenge },
    } = yield take(matchFetchSuccess('getChallenge'));

    const appSecretKey = yield select(getSecretKeyFor, {
      accountNumber: app.id,
    });

    const signedChallenge = Auth.Sign.call(
      appSecretKey,
      challenge,
      app.stellar_public_key
    );

    const appPublicKey = yield select(getPublicKeyFor, {
      accountNumber: app.id,
    });

    yield put(requestActions.fetchStart({
      name: 'postChallenge',
      method: 'POST',
      payload: [
        app.auth_url,
        {
          xdr: signedChallenge,
          public_key: appPublicKey,
        },
      ],
    }));

    const {
      payload: { data: token },
    } = yield take(matchFetchSuccess('postChallenge'));

    const finalUrl = `${app.url}/?token=${token}`;
    tab.location.href = finalUrl;
  } catch (error) {
    tab.close();
  }
}

export default takeLatest(appActions.openDapp, openDapp);
