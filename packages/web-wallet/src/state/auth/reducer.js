import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const authActions = createActions(['signup', 'setKeystore', 'setSignupStep'], 'auth');

const initialState = {
  signupStep: 'start',
  keystore: null,
};

export const authReducer = createReducer(
  {
    [authActions.setSignupStep]: (state, signupStep) =>
      merge(state, { signupStep }),
    [authActions.setKeystore]: (state, keystore) =>
      merge(state, { keystore }),
  },
  initialState
);
