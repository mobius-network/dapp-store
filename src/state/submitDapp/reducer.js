import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const submitSteps = {
  account: 'account',
  form: 'form',
  submitted: 'submitted',
};

export const submitDappActions = createActions(
  [
    'createUserAccount',
    'reset',
    'setSubmitStep',
    'setUserAccount',
    'submitDapp',
  ],
  'submitDapp'
);

const initialState = {
  isAppSubmitted: false,
  submitStep: submitSteps.account,
  userAccount: undefined,
  userAccountNumber: undefined,
};

export const submitDappReducer = createReducer(
  {
    [submitDappActions.reset]: () => initialState,
    [submitDappActions.setSubmitStep]: (state, submitStep) =>
      merge(state, { submitStep }),
    [submitDappActions.setUserAccount]: (
      state,
      { userAccount, userAccountNumber }
    ) => merge(state, { userAccount, userAccountNumber }),
  },
  initialState
);
