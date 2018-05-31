import { TransactionBuilder, Keypair } from 'stellar-sdk';
import { stellarServer } from './server';

export const stellarAccount = {
  setAccount(account) {
    this.account = account;
  },

  setWallet(wallet) {
    this.wallet = wallet;
    this.secret = this.wallet.getSecret(0);
    this.keypair = Keypair.fromSecret(this.secret);
  },

  submitTransaction(operation) {
    const transaction = new TransactionBuilder(this.account)
      .addOperation(operation)
      .build();

    transaction.sign(this.keypair);

    return stellarServer.submitTransaction(transaction);
  },
};
