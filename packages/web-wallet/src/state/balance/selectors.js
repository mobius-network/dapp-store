/* eslint-disable no-shadow */
import { createSelector } from 'reselect';
import { stellarBalance } from '@mobius-network/core';

export const accountNumber = (_, number) => parseInt(number, 10);
export const asset = (_, { asset }) => asset;
export const fixed = (_, { fixed }) => fixed;

export const wallet = state => state.balance.wallet;
export const masterAccount = state => state.balance.masterAccount;

export const balance = createSelector(
  masterAccount,
  account => stellarBalance.parseBalance(account),
);

export const assetBalance = createSelector(
  [balance, asset],
  (balance, asset) => stellarBalance.parsedBalanceValue(balance, asset)
);

export const assetValueFixed = createSelector(
  [assetBalance, fixed],
  (assetBalance, fixed) => {
    if (!assetBalance) {
      return null;
    }
    return assetBalance.toFixed(fixed);
  }
);

export const publicKeyFor = createSelector(
  [wallet, accountNumber],
  (wallet, accountNumber) => {
    if (wallet === null) {
      return null;
    }

    return wallet.getPublicKey(accountNumber);
  }
);

export const secretKeyFor = createSelector(
  [wallet, accountNumber],
  (wallet, accountNumber) => {
    if (wallet === null) {
      return null;
    }

    return wallet.getSecret(accountNumber);
  }
);

export const keypairFor = createSelector(
  [wallet, accountNumber],
  (wallet, accountNumber) => {
    if (wallet === null) {
      return null;
    }

    return wallet.getKeypair(accountNumber);
  }
);

export const masterTrustlineCreated = createSelector(
  balance,
  balance => balance && balance.mobi !== undefined,
);
