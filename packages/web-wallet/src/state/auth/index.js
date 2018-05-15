import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const authActions = createActions(['setSignupStep'], 'auth');

const initialState = {
  signupStep: 'start',
};

export const authReducer = createReducer(
  {
    [authActions.setSignupStep]: (state, signupStep) =>
      merge(state, {
        signupStep,
      }),
  },
  initialState
);

export * from './selectors';
