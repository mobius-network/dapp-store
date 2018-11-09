import { merge } from 'state/utils';
import { createReducer } from 'redux-yo';

import { storeAccountActions } from './actions';

const initialState = {};

export const storeAccountReducer = createReducer(
  {
    [storeAccountActions.setStoreAccount]: (state, storeAccount) => merge(state, storeAccount),
  },
  initialState
);
