import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const submitSteps = {
  completed: 'completed',
  createAccount: 'createAccount',
  detailsForm: 'detailsForm',
};

export const submitDappActions = createActions(
  [
    'createUserAccount',
    'mergeUserAccount',
    'reset',
    'setSubmitStep',
    'setUserAccount',
    'submitDapp',
  ],
  'submitDapp'
);

const initialState = {
  isAppSubmitted: false,
  submitStep: submitSteps.createAccount,
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
