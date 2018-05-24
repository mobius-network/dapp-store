import StellarHDWallet from 'stellar-hd-wallet';
import { encrypt, stellarBalance } from '@mobius-network/core';
import { call, takeLatest, select, put, all } from 'redux-saga/effects';

import {
  balanceActions,
  publicKeyFor,
  secretKeyFor,
  masterTrustlineCreated,
} from 'state/balance';
import { authActions } from './reducer';

export function* signup({ payload }) {
  const { password } = payload;

  const mnemonic = StellarHDWallet.generateMnemonic();

  const keystore = yield call(encrypt, password, mnemonic);
  yield put(authActions.setKeystore(keystore));

  const wallet = StellarHDWallet.fromMnemonic(mnemonic);
  yield put(balanceActions.setWallet(wallet));

  const state = yield select();
  const publicKey = publicKeyFor(state, 0);

  const account = yield call(stellarBalance.safeLoadAccount, publicKey);
  yield put(balanceActions.setMasterAccount(account));

  // const state = yield select();

  if (masterTrustlineCreated(state)) {
    stellarBalance.createTrustline(publicKeyFor(state, 0), secretKeyFor(state, 0));
  }
}

export function* signupSaga() {
  yield all([takeLatest(authActions.signup.type, signup)]);
}
