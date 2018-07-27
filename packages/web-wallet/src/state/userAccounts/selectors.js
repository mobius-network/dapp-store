import { createSelector } from 'reselect';
import { isNil, isEmpty } from 'lodash';
import { parseBalance, parsedBalanceValue } from '@mobius-network/core';

export const getUserAccounts = state => state.userAccounts;

export const getUserAccountsEntry = createSelector(
  [getUserAccounts, (_, { id } = {}) => id],
  (userAccounts, id) => {
    if (isEmpty(userAccounts)) {
      return {};
    }

    if (isNil(id)) {
      return {};
    }

    return userAccounts[id] || {};
  }
);

export const getUserAccount = createSelector(
  getUserAccountsEntry,
  entry => entry.userAccount || {}
);

export const getDappDetails = createSelector(
  getUserAccountsEntry,
  entry => entry.dappDetails || {}
);

export const getDappStatus = createSelector(
  getUserAccountsEntry,
  entry => entry.dappStatus
);

export const getUserAccountBalance = createSelector(
  getUserAccount,
  userAccount => {
    if (isEmpty(userAccount)) {
      return undefined;
    }

    const balances = parseBalance(userAccount);

    return parsedBalanceValue(balances, 'mobi');
  }
);
