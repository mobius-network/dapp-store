import { Keypair, Operation, TransactionBuilder } from 'stellar-sdk';
import { assets } from './balance';

export function createAppAccount(args) {
  const {
    masterSecretKey,
    appSecretKey,
    developerPublicKey,
    amount,
    account,
  } = args;

  const masterKeyPair = Keypair.fromSecret(masterSecretKey);
  const appKeyPair = Keypair.fromSecret(appSecretKey);

  const createAccountOp = Operation.createAccount({
    source: masterKeyPair.publicKey(),
    destination: appKeyPair.publicKey(),
    startingBalance: '3',
  });

  const changeTrustOp = Operation.changeTrust({
    source: appKeyPair.publicKey(),
    asset: assets.mobi,
  });

  const paymentOp = Operation.payment({
    source: masterKeyPair.publicKey(),
    destination: appKeyPair.publicKey(),
    amount: amount.toString(),
    asset: assets.mobi,
  });

  const setSignerOp = Operation.setOptions({
    source: appKeyPair.publicKey(),
    signer: {
      ed25519PublicKey: developerPublicKey,
      weight: 1,
    },
  });

  const setWeightsOp = Operation.setOptions({
    source: appKeyPair.publicKey(),
    masterWeight: 10,
    highThreshold: 10,
    medThreshold: 1,
    lowThreshold: 1,
  });

  const transaction = new TransactionBuilder(account)
    .addOperation(createAccountOp)
    .addOperation(changeTrustOp)
    .addOperation(paymentOp)
    .addOperation(setSignerOp)
    .addOperation(setWeightsOp)
    .build();

  transaction.sign(masterKeyPair);
  transaction.sign(appKeyPair);

  return transaction;
}
