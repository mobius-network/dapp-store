import { createSelector } from 'reselect';
import { isEmpty, isNil } from 'lodash';
import { parseBalance, parsedBalanceValue } from '@mobius-network/core';

import { getEntitiesObject, getIsSuccess, getOperation } from 'state/requests';
import { getDappCatalog, parseDappCatalogEntry } from 'state/storeAccount';

export const getUserAccount = createSelector(
  state => getEntitiesObject(state, { entity: 'userAccounts' }),
  (_, { accountNumber } = {}) => accountNumber,
  (userAccounts, accountNumber) => {
    if (isEmpty(userAccounts)) {
      return {};
    }

    return userAccounts[accountNumber] || {};
  }
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

export const getUserAccountId = createSelector(
  getUserAccount,
  userAccount => userAccount.id
);

export const getUserDappDetails = createSelector(
  state => getEntitiesObject(state, { entity: 'userDapps' }),
  (_, { accountNumber } = {}) => accountNumber,
  (userDapps, accountNumber) => {
    if (isEmpty(userDapps)) {
      return {};
    }

    return userDapps[accountNumber] || {};
  }
);

export const getDappStatus = createSelector(
  [getDappCatalog, getUserAccountId],
  (dappCatalog, accountId) => {
    if (isEmpty(dappCatalog)) {
      return undefined;
    }

    const entry = dappCatalog[accountId];
    const parsedEntry = parseDappCatalogEntry(entry) || {};

    return parsedEntry.status;
  }
);

export const getAccountIsLoaded = createSelector(
  (state, { accountNumber } = {}) =>
    getIsSuccess(state, { operation: `loadUserAccount_${accountNumber}` }),
  (state, { accountNumber } = {}) =>
    getOperation(state, { operation: `loadDappDetails_${accountNumber}` }),
  (state, { accountNumber } = {}) =>
    getIsSuccess(state, { operation: `loadDappDetails_${accountNumber}` }),
  (isUserAccountLoaded, loadDappDetailsOperation, isDappDetailsLoaded) =>
    isUserAccountLoaded &&
    (isNil(loadDappDetailsOperation) || isDappDetailsLoaded)
);
