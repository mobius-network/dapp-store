import { Operation } from 'stellar-sdk';
import { stellarAccount } from './account';
import { assets } from './balance';
import { stellarServer } from './server';

export const stellarTransfer = {
  async findBestPath(opts) {
    const {
      source,
      destination,
      destinationAsset,
      destinationAmount,
      limit = 5,
    } = opts;

    const { records } = await stellarServer
      .paths(source, destination, destinationAsset, destinationAmount)
      .limit(limit)
      .call();

    const sortedByPrice = records.sort((a, b) =>
      a.source_amount - b.source_amount);

    return sortedByPrice[0];
  },

  pathPayment(opts) {
    const {
      sendAsset = assets.native,
      sendMax = String(Number.MAX_SAFE_INTEGER / 10000000),
      path = [],
      source = stellarAccount.account.id,
      ...rest
    } = opts;

    return Operation.pathPayment({
      sendAsset,
      sendMax,
      path,
      source,
      ...rest,
    });
  },
};
