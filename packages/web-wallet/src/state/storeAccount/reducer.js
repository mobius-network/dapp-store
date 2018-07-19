import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const storeAccountActions = createActions(
  ['setStoreAccount', 'stopWatchStoreAccount', 'watchStoreAccount'],
  'storeAccount'
);

const initialState = {};

export const storeAccountReducer = createReducer(
  {
    [storeAccountActions.setStoreAccount]: (state, storeAccount) =>
      merge(state, storeAccount),
  },
  initialState
);
