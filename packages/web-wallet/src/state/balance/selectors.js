/* eslint-disable no-shadow */
import { createSelector } from 'reselect';
import { stellarBalance } from '@mobius-network/core';

export const asset = (_, { asset }) => asset;
export const fixed = (_, { fixed }) => fixed;

export const getMasterAccount = state => state.balance.masterAccount;

export const balance = createSelector(getMasterAccount, account =>
  stellarBalance.parseBalance(account));

export const assetBalance = createSelector([balance, asset], (balance, asset) =>
  stellarBalance.parsedBalanceValue(balance, asset));

export const assetValueFixed = createSelector(
  [assetBalance, fixed],
  (assetBalance, fixed) => {
    if (!assetBalance) {
      return null;
    }
    return assetBalance.toFixed(fixed);
  }
);

export const masterTrustlineCreated = createSelector(
  balance,
  balance => balance && balance.mobi !== undefined
);
