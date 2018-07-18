import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const submitSteps = {
  account: 'account',
  form: 'form',
};

export const submitDappActions = createActions(
  ['createUserAccount', 'setSubmitStep', 'setUserAccount'],
  'submitDapp'
);

const initialState = {
  isAppSubmitted: false,
  submitStep: submitSteps.account,
  userAccount: undefined,
};

export const submitDappReducer = createReducer(
  {
    [submitDappActions.setSubmitStep]: (state, submitStep) =>
      merge(state, { submitStep }),
    [submitDappActions.setUserAccount]: (state, userAccount) =>
      merge(state, { userAccount }),
  },
  initialState
);
