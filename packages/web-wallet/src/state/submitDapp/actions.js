import { createActions } from 'redux-yo';

export const submitDappActions = createActions(
  ['createUserAccount', 'reset', 'setSubmitStep', 'setUserAccount'],
  'submitDapp'
);
