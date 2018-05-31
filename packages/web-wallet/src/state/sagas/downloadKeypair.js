import download from 'downloadjs';
import { takeLatest, select, put } from 'redux-saga/effects';

import { balanceActions } from 'state/balance';

import { getKeystore } from 'state/auth/selectors';
import { authActions, signupSteps } from 'state/auth/reducer';

export function* downloadKeypair() {
  const keypair = yield select(getKeystore);

  const date = new Date();
  const fileName = `${date.toISOString()}.json`;

  download(JSON.stringify(keypair), `Mobius-${fileName}`, 'application/json');

  yield put(authActions.setSignupStep(signupSteps.mnemonic));
}

export default takeLatest(balanceActions.downloadKeypair, downloadKeypair);
