import { createActions } from 'redux-yo';

export const userAccountsActions = createActions(
  ['editDapp', 'loadUserAccountWithDapp', 'mergeUserAccount', 'submitDapp'],
  'userAccounts'
);
