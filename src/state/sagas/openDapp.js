import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';
import { Auth } from '@mobius-network/mobius-client-js';
import { isEmpty, isNil } from 'lodash';

import { getSecretKeyFor, getPublicKeyFor } from 'state/auth/selectors';
import { appActions, getAppAccount } from 'state/apps';
import { notificationsActions } from 'state/notifications';
import { fetchStart } from 'state/requests/reducer';

import { createApp } from './depositApp';

function* getChallenge(dapp) {
  const { challenge } = yield call(fetchStart, {
    name: 'getChallenge',
    payload: dapp.auth_url,
    serialize: result => ({ challenge: result }),
  });

  return challenge;
}

function* signChallenge(challenge, dapp) {
  const dappSecretKey = yield select(getSecretKeyFor, {
    accountNumber: dapp.id,
  });

  try {
    const signedChallenge = Auth.Sign.call(
      dappSecretKey,
      challenge,
      dapp.stellar_public_key
    );

    return signedChallenge;
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));

    throw error;
  }
}

function* getToken(signedChallenge, dapp) {
  const dappPublicKey = yield select(getPublicKeyFor, {
    accountNumber: dapp.id,
  });

  const { token } = yield call(fetchStart, {
    name: 'getToken',
    method: 'POST',
    payload: [
      dapp.auth_url,
      {
        xdr: signedChallenge,
        public_key: dappPublicKey,
      },
    ],
    serialize: result => ({ token: result }),
  });

  return token;
}

export function* run({ payload: dapp }) {
  const tab = window.open('', '_blank');

  try {
    const dappAccount = yield select(getAppAccount, { appId: dapp.id });

    if (isNil(dappAccount)) {
      yield call(createApp, dapp, 0);
    }

    const challenge = yield call(getChallenge, dapp);

    const signedChallenge = yield call(signChallenge, challenge, dapp);

    const token = yield call(getToken, signedChallenge, dapp);

    const finalUrl = isNil(token) || isEmpty(token) ? dapp.url : `${dapp.url}/?token=${token}`;

    tab.location.href = finalUrl;
  } catch (error) {
    tab.close();
  }
}

export default takeLatest(appActions.openDapp, run);
