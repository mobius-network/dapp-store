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
    'completeSignup',
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
    [REHYDRATE]: (state, { auth = {} } = {}) => {
      if (auth.wallet) {
        return merge(state, {
          ...auth,
          wallet: StellarHDWallet.fromSeed(auth.wallet.seedHex),
        });
      }

      return merge(state, auth);
    },
    [authActions.set]: (state, payload) => merge(state, payload),
    [authActions.completeSignup]: state =>
      merge(state, {
        loggedIn: true,
        mnemonic: undefined,
        keystore: undefined,
      }),
    [authActions.login]: state =>
      merge(state, {
        loggedIn: true,
      }),
    [authActions.setSignupStep]: (state, signupStep) =>
      merge(state, { signupStep }),
    [authActions.setKeystore]: (state, keystore) => merge(state, { keystore }),
    [authActions.setMnemonic]: (state, mnemonic) => merge(state, { mnemonic }),
  },
  initialState
);
