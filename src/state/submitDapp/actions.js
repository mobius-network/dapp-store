import { createActions } from 'redux-yo';

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
