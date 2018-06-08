// import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

import { authActions } from 'state/auth/reducer';

export const accountActions = createActions(
  ['setMasterAccount', 'downloadKeypair', 'transact'],
  'account'
);

const initialState = null;

export const accountReducer = createReducer(
  {
    [accountActions.setMasterAccount]: (state, masterAccount) => masterAccount,
    [authActions.logout]: () => initialState,
  },
  initialState
);
