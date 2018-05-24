import StellarSdk from 'stellar-sdk';

if (process.env.STELLAR_TESTNET === 'true') {
  StellarSdk.Network.useTestNetwork();
}

export const stellarServer = new StellarSdk.Server(process.env.STELLAR_HORIZON_URL);
