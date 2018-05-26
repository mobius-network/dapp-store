/* eslint-disable no-shadow */
import { createSelector } from 'reselect';
import { stellarBalance } from '@mobius-network/core';

export const getAsset = (_, { asset }) => asset;
export const getFixed = (_, { fixed }) => fixed;

export const getMasterAccount = state => state.balance.masterAccount;

export const getBalance = createSelector(getMasterAccount, account =>
  stellarBalance.parseBalance(account));

export const getAssetBalance = createSelector(
  [getBalance, getAsset],
  (balance, asset) => {
    if (!balance) {
      return null;
    }

    return stellarBalance.parsedBalanceValue(balance, asset);
  }
);

export const assetValueFixed = createSelector(
  [getAssetBalance, getFixed],
  (assetBalance, fixed) => {
    if (!assetBalance) {
      return null;
    }
    return assetBalance.toFixed(fixed);
  }
);

export const masterTrustlineCreated = createSelector(
  getBalance,
  balance => balance && balance.mobi !== undefined
);
