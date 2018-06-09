import { Asset, Operation } from 'stellar-sdk';

export const assets = {
  mobi: new Asset(
    process.env.MOBI_ASSET,
    process.env.MOBI_ASSET_ISSUER
  ),
  native: Asset.native(),
};

export function parseBalance(account) {
  if (!account) {
    return null;
  }

  return account.balances.reduce((acc, b) => {
    acc[(b.asset_code || b.asset_type).toLowerCase()] = b;
    return acc;
  }, {});
}

export function parsedBalanceValue(h, asset) {
  const balance = h[asset];

  if (!balance) {
    return 0;
  }

  return parseFloat(balance.balance);
}

export function createTrustline(asset) {
  return Operation.changeTrust({ asset });
}
