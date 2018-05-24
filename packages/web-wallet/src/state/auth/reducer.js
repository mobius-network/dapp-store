import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const signupSteps = {
  password: 'password',
  download: 'download',
  mnemonic: 'mnemonic',
  completed: 'completed',
};

export const authActions = createActions(
  ['signup', 'setKeystore', 'setSignupStep', 'logout'],
  'auth'
);

const initialState = {
  signupStep: 'password',
  keystore: null,
};

export const authReducer = createReducer(
  {
    [authActions.setSignupStep]: (state, signupStep) =>
      merge(state, { signupStep }),
    [authActions.setKeystore]: (state, keystore) => merge(state, { keystore }),
  },
  initialState
);
