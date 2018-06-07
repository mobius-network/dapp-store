/* eslint-disable no-shadow */
import { createSelector } from 'reselect';
import { parseBalance, parsedBalanceValue } from '@mobius-network/core';

export const getAsset = (_, { asset }) => asset;
export const getFixed = (_, { fixed }) => fixed;

export const getMasterAccount = state => state.masterAccount;

export const getBalance = createSelector(getMasterAccount, account =>
  parseBalance(account));

export const getAccountId = createSelector(
  getMasterAccount,
  account => account.id
);

export const getAssetBalance = createSelector(
  [getBalance, getAsset],
  (balance, asset) => {
    if (!balance) {
      return undefined;
    }

    return parsedBalanceValue(balance, asset);
  }
);

export const getAssetValueFixed = createSelector(
  [getAssetBalance, getFixed],
  (assetBalance, fixed) => {
    if (!assetBalance) {
      return undefined;
    }
    return assetBalance.toFixed(fixed);
  }
);

export const getMasterTrustlineCreated = createSelector(
  getBalance,
  balance => balance && balance.mobi !== undefined
);
