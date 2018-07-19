import { createSelector } from 'reselect';
import { isNil, isEmpty } from 'lodash';
import { parseBalance, parsedBalanceValue } from '@mobius-network/core';

import { getDappCatalog } from 'state/storeAccount';

export const getSubmitStep = state => state.submitDapp.submitStep;

export const getUserAccount = state => state.submitDapp.userAccount;

export const getUserAccountNumber = state => state.submitDapp.userAccountNumber;

export const getUserAccountId = createSelector(
  getUserAccount,
  account => account.id
);

export const getAsset = (_, { asset = 'mobi' } = {}) => asset;

export const getMobiAsset = () => 'mobi';

export const createBalanceSelector = accountSelector =>
  createSelector(accountSelector, account => parseBalance(account));

export const createAssetBalanceSelector = (
  balanceSelector,
  assetSelector = getAsset
) =>
  createSelector([balanceSelector, assetSelector], (balance, asset) => {
    if (!balance) {
      return 0;
    }

    return parsedBalanceValue(balance, asset);
  });

export const getBalance = createBalanceSelector(getUserAccount);

export const getMobiBalance = createAssetBalanceSelector(
  getBalance,
  getMobiAsset
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