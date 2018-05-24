import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const balanceActions = createActions([
  'setWallet',
  'setMasterAccount',
], 'balance');

const initialState = {
  wallet: null,
  masterAccount: null,
};

export const balanceReducer = createReducer(
  {
    [balanceActions.setWallet]: (state, wallet) =>
      merge(state, { wallet }),
    [balanceActions.setMasterAccount]: (state, masterAccount) =>
      merge(state, { masterAccount }),
  },
  initialState
);

export * from './selectors';
