import { takeLatest, call, select } from 'redux-saga/effects';
import { Auth } from '@mobius-network/mobius-client-js';

import { getSecretKeyFor, getPublicKeyFor } from 'state/auth/selectors';
import { appActions } from 'state/apps/reducer';
import { fetchStart } from 'state/requests/reducer';

export function* openDapp({ payload: app }) {
  const tab = window.open('', '_blank');

  try {
    const { challenge } = yield call(fetchStart, {
      name: 'getChallenge',
      payload: app.auth_url,
      serialize: result => ({ challenge: result }),
    });

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

    const { token } = yield call(fetchStart, {
      name: 'postChallenge',
      method: 'POST',
      payload: [
        app.auth_url,
        {
          xdr: signedChallenge,
          public_key: appPublicKey,
        },
      ],
      serialize: result => ({ token: result }),
    });

    const finalUrl = `${app.url}/?token=${token}`;
    tab.location.href = finalUrl;
  } catch (error) {
    tab.close();
  }
}

export default takeLatest(appActions.openDapp, openDapp);
