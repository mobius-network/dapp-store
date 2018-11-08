import { merge } from 'state/utils';
import { createReducer } from 'redux-yo';

import { submitDappActions } from './actions';

export const submitSteps = {
  completed: 'completed',
  createAccount: 'createAccount',
  detailsForm: 'detailsForm',
  setup: 'setup',
};

const initialState = {
  submitStep: submitSteps.createAccount,
  userAccount: undefined,
  userAccountNumber: undefined,
};

export const submitDappReducer = createReducer(
  {
    [submitDappActions.reset]: () => initialState,
    [submitDappActions.setSubmitStep]: (state, submitStep) => merge(state, { submitStep }),
    [submitDappActions.setUserAccount]: (
      state,
      { userAccount, userAccountNumber }
    ) => merge(state, { userAccount, userAccountNumber }),
  },
  initialState
);
