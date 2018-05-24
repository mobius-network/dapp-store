import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const balanceActions = createActions(
  ['setWallet', 'setMasterAccount', 'downloadKeypair', 'setMnemonic'],
  'balance'
);

const initialState = {
  wallet: null,
  masterAccount: null,
};

export const balanceReducer = createReducer(
  {
    [balanceActions.setWallet]: (state, wallet) => merge(state, { wallet }),
    [balanceActions.setMasterAccount]: (state, masterAccount) =>
      merge(state, { masterAccount }),
    [balanceActions.setMnemonic]: (state, mnemonic) =>
      merge(state, { mnemonic }),
  },
  initialState
);

export * from './selectors';
