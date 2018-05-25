/* eslint-disable no-shadow */
import { createSelector } from 'reselect';

export const getAccountNumber = (_, number) => parseInt(number, 10);

export const signupStep = state => state.auth.signupStep;
export const getKeystore = state => state.auth.keystore;
export const getMnemonic = state => state.auth.mnemonic;
export const getWallet = state => state.auth.wallet;

export const isAuthorized = state => !!state.auth.wallet && state.auth.loggedIn;

export const publicKeyFor = createSelector(
  [getWallet, getAccountNumber],
  (wallet, accountNumber) => {
    if (!wallet) {
      return null;
    }

    return wallet.getPublicKey(accountNumber);
  }
);

export const secretKeyFor = createSelector(
  [getWallet, getAccountNumber],
  (wallet, accountNumber) => {
    if (!wallet) {
      return null;
    }

    return wallet.getSecret(accountNumber);
  }
);

export const keypairFor = createSelector(
  [getWallet, getAccountNumber],
  (wallet, accountNumber) => {
    if (!wallet) {
      return null;
    }

    return wallet.getKeypair(accountNumber);
  }
);
