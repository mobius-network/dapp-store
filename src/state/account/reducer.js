// import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

import { authActions } from 'state/auth/actions';

export const accountActions = createActions(
  ['downloadKeypair', 'reloadMasterAccount', 'setMasterAccount', 'transact'],
  'account'
);

const initialState = null;

export const accountReducer = createReducer(
  {
    [accountActions.setMasterAccount]: (_, masterAccount) => masterAccount,
    [authActions.logout]: () => initialState,
  },
  initialState
);
