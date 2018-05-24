import StellarSdk from 'stellar-sdk';
import { stellarServer } from './server';

export const stellarBalance = {
  mobi() {
    return new StellarSdk.Asset(
      process.env.MOBI_ASSET,
      process.env.MOBI_ASSET_ISSUER
    );
  },

  parseBalance(account) {
    if (!account) {
      return null;
    }

    return account.balances.reduce((h, b) => {
      h[(b.asset_code || b.asset_type).toLowerCase()] = b;
      return h;
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

  createTrustline(publicKey, secret) {
    const keypair = StellarSdk.Keypair.fromSecret(secret);
    const changeTrustOp = StellarSdk.Operation.changeTrust({
      asset: this.mobi(),
    });

    const changeTrust = account => {
      const transaction = new StellarSdk.TransactionBuilder(account)
        .addOperation(changeTrustOp)
        .build();

      transaction.sign(keypair);
      return stellarServer.submitTransaction(transaction);
    };

    return stellarServer.loadAccount(publicKey).then(changeTrust);
  },
};
