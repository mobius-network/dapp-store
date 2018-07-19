import { createActions } from 'redux-yo';

export const storeAccountActions = createActions(
  ['setStoreAccount', 'stopWatchStoreAccount', 'watchStoreAccount'],
  'storeAccount'
);
