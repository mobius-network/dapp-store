import { createActions } from 'redux-yo';

export const storeAccountActions = createActions(
  [
    'loadStoreAccount',
    'setStoreAccount',
    'stopWatchStoreAccount',
    'watchStoreAccount',
  ],
  'storeAccount'
);
