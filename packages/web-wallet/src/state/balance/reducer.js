import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const balanceActions = createActions(
  ['setWallet', 'setMasterAccount', 'downloadKeypair'],
  'balance'
);

const initialState = {
  masterAccount: null,
};

export const balanceReducer = createReducer(
  {
    [balanceActions.setWallet]: (state, wallet) => merge(state, { wallet }),
    [balanceActions.setMasterAccount]: (state, masterAccount) =>
      merge(state, { masterAccount }),
  },
  initialState
);
