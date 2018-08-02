import { createSelector } from 'reselect';
import { isNil, isEmpty } from 'lodash';
import { parseBalance, parsedBalanceValue } from '@mobius-network/core';

import { getDappCatalog } from 'state/storeAccount';

export const getSubmitStep = state => state.submitDapp.submitStep;

export const getUserAccount = state => state.submitDapp.userAccount;

export const getUserAccountNumber = state => state.submitDapp.userAccountNumber;

export const getUserAccountId = createSelector(
  getUserAccount,
  userAccount => userAccount.id
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

export const getIsDappSubmitted = createSelector(
  [getUserAccountId, getDappCatalog],
  (userAccountId, dappCatalog) => {
    if (isEmpty(dappCatalog)) {
      return false;
    }

    const entry = dappCatalog[userAccountId];

    if (isNil(entry)) {
      return false;
    }

    return true;
  }
);
