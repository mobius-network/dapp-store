import { createActions } from 'redux-yo';

export const requestActions = createActions(
  [
    'deleteEntities',
    'fetchFail',
    'fetchStart',
    'fetchSuccess',
    'resetRequest',
    'resetRequests',
    'setEntities',
  ],
  'requests'
);
