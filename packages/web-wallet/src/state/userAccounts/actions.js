import { createActions } from 'redux-yo';

export const userAccountsActions = createActions(
  ['loadUserAccountWithDapp', 'setUserAccountData'],
  'userAccounts'
);
