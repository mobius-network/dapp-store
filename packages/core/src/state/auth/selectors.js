import { createSelector } from 'reselect';

export const getAccountNumber = (_, { accountNumber = 0 } = {}) =>
  parseInt(accountNumber, 10);

export const getSignupStep = state => state.auth.signupStep;
export const getKeystore = state => state.auth.keystore;
export const getMnemonic = state => state.auth.mnemonic;
export const getWallet = state => state.auth.wallet;
export const getIsLoggedIn = state => state.auth.loggedIn;
export const getIsAccountFunded = state => state.auth.accountFunded;

export const getIsAuthorized = state =>
  !!state.auth.wallet && state.auth.loggedIn;

export const getPublicKeyFor = createSelector(
  [getWallet, getAccountNumber],
  (wallet, accountNumber) => {
    if (!wallet) {
      return undefined;
    }

    return wallet.getPublicKey(accountNumber);
  }
);

export const getSecretKeyFor = createSelector(
  [getWallet, getAccountNumber],
  (wallet, accountNumber) => {
    if (!wallet) {
      return undefined;
    }

    return wallet.getSecret(accountNumber);
  }
);

export const getKeypairFor = createSelector(
  [getWallet, getAccountNumber],
  (wallet, accountNumber) => {
    if (!wallet) {
      return undefined;
    }

    return wallet.getKeypair(accountNumber);
  }
);
