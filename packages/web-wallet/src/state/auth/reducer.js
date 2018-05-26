import StellarHDWallet from 'stellar-hd-wallet';
import { REHYDRATE } from 'redux-persist';
import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const signupSteps = {
  password: 'password',
  download: 'download',
  mnemonic: 'mnemonic',
};

export const authActions = createActions(
  [
    'set',
    'login',
    'logout',
    'signup',
    'setKeystore',
    'setSignupStep',
    'setMnemonic',
  ],
  'auth'
);

const initialState = {
  loggedIn: false,
  signupStep: 'password',
  wallet: null,
  mnemonic: undefined,
  keystore: undefined,
};

export const authReducer = createReducer(
  {
    [REHYDRATE]: (state, { auth }) =>
      merge(state, {
        ...auth,
        wallet: StellarHDWallet.fromSeed(auth.wallet.seedHex),
      }),
    [authActions.set]: (state, payload) => merge(state, payload),
    [authActions.login]: state =>
      merge(state, {
        loggedIn: true,
        mnemonic: undefined,
        keystore: undefined,
      }),
    [authActions.setSignupStep]: (state, signupStep) =>
      merge(state, { signupStep }),
    [authActions.setKeystore]: (state, keystore) => merge(state, { keystore }),
    [authActions.setMnemonic]: (state, mnemonic) => merge(state, { mnemonic }),
  },
  initialState
);
