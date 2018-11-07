import { noop } from 'lodash';
import StellarHDWallet from 'stellar-hd-wallet';
import { takeLatest, call, put } from 'redux-saga/effects';
import { encrypt } from 'core';

import { authActions, signupSteps } from 'state/auth/reducer';

export function* signup({ payload, meta: { resolve = noop } = {} }) {
  const { password } = payload;

  const mnemonic = StellarHDWallet.generateMnemonic();

  const { keystore, wallet } = yield call(encrypt, password, mnemonic);

  yield put(authActions.set({
    wallet,
    keystore,
    mnemonic,
    signupStep: signupSteps.download,
  }));

  resolve();
}

export default takeLatest(authActions.signupStart, signup);
