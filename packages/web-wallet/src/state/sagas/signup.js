import StellarHDWallet from 'stellar-hd-wallet';
import { takeLatest, fork, call, put } from 'redux-saga/effects';
import { encrypt } from '@mobius-network/core';

import { authActions, signupSteps } from 'state/auth/reducer';
import { prepareAccount } from './watchAccount';

export function* signup({ payload }) {
  const { password } = payload;

  const mnemonic = StellarHDWallet.generateMnemonic();

  const { keystore, wallet } = yield call(encrypt, password, mnemonic);

  yield put(authActions.set({
    wallet,
    keystore,
    mnemonic,
    signupStep: signupSteps.download,
  }));

  yield fork(prepareAccount);
}

export default takeLatest(authActions.signupStart, signup);
