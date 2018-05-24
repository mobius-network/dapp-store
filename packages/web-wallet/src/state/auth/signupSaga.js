import download from 'downloadjs';
import StellarHDWallet from 'stellar-hd-wallet';
import { encrypt, stellarBalance } from '@mobius-network/core';
import { fork, call, takeLatest, select, put, all } from 'redux-saga/effects';

import {
  balanceActions,
  publicKeyFor,
  secretKeyFor,
  masterTrustlineCreated,
} from 'state/balance';

import { getKeystore } from './selectors';
import { authActions, signupSteps } from './reducer';

export function* downloadKeypair() {
  const keypair = yield select(getKeystore, 0);

  const date = new Date();
  const fileName = `${date.toISOString()}.json`;

  download(JSON.stringify(keypair), `Mobius-${fileName}`, 'application/json');

  yield put(authActions.setSignupStep(signupSteps.mnemonic));
}

export function* prepareAccount(wallet) {
  yield put(balanceActions.setWallet(wallet));

  const publicKey = yield select(publicKeyFor, 0);

  const account = yield call(stellarBalance.safeLoadAccount, publicKey);
  yield put(balanceActions.setMasterAccount(account));

  const state = yield select();

  if (masterTrustlineCreated(state)) {
    stellarBalance.createTrustline(
      publicKeyFor(state, 0),
      secretKeyFor(state, 0)
    );
  }
}

export function* signup({ payload }) {
  const { password } = payload;

  const mnemonic = StellarHDWallet.generateMnemonic();

  const { keystore, wallet } = yield call(encrypt, password, mnemonic);
  yield put(authActions.setKeystore(keystore));
  yield put(authActions.setSignupStep(signupSteps.download));
  yield put(balanceActions.setMnemonic(mnemonic));

  yield fork(prepareAccount, wallet);
}

export function* signupSaga() {
  yield all([
    takeLatest(authActions.signup.type, signup),
    takeLatest(balanceActions.downloadKeypair, downloadKeypair),
  ]);
}
