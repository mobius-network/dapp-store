import { Asset, Operation } from 'stellar-sdk';
import { stellarServer } from './server';

export const assets = {
  mobi: new Asset(
    process.env.MOBI_ASSET,
    process.env.MOBI_ASSET_ISSUER
  ),
  native: Asset.native(),
};

export const stellarBalance = {
  mobi: assets.mobi,

  parseBalance(account) {
    if (!account) {
      return null;
    }

    return account.balances.reduce((acc, b) => {
      acc[(b.asset_code || b.asset_type).toLowerCase()] = b;
      return acc;
    }, {});
  },

  parsedBalanceValue(h, asset) {
    const balance = h[asset];
    if (!balance) {
      return null;
    }
    return parseFloat(balance.balance);
  },

  safeLoadAccount(pubKey) {
    return new Promise((resolve, reject) => {
      stellarServer
        .loadAccount(pubKey)
        .then(account => resolve(account))
        .catch(err => {
          if (err.name === 'NotFoundError') {
            resolve(null);
          } else {
            reject(err);
          }
        });
    });
  },

  createTrustline(asset) {
    return Operation.changeTrust({ asset });
  },
};
