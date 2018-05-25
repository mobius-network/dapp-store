import StellarHDWallet from 'stellar-hd-wallet';
import { encrypt, stellarBalance } from '@mobius-network/core';
import { fork, call, select, put } from 'redux-saga/effects';

import {
  balanceActions,
  publicKeyFor,
  secretKeyFor,
  masterTrustlineCreated,
} from 'state/balance';

import { authActions, signupSteps } from './reducer';

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

export default { [signup]: authActions.signup };
