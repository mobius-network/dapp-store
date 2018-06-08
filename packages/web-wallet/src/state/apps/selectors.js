// import { get } from 'lodash';
import { createSelector } from 'reselect';
import {
  getAsset,
  createBalanceSelector,
  createAssetBalanceSelector,
} from 'state/account/selectors';

export const getAppId = (_, { appId } = {}) => appId;

export const getAppAccounts = state => state.apps;

export const getAppAccount = createSelector(
  [getAppAccounts, getAppId],
  (accounts, id) => accounts[id]
);

export const getAppBalance = createBalanceSelector(getAppAccount);
export const getAppAssetBalance = createAssetBalanceSelector(getAppBalance);

export const getAppAssetSumBalance = createSelector(
  [getAppAccounts, getAsset],
  (accounts, asset) =>
    Object.values(accounts)
      .filter(v => v)
      .reduce((acc, app) => {
        const assetRegexp = new RegExp(asset, 'i');
        const { balance = 0 } =
          app.balances.find(data => assetRegexp.test(data.asset_type)) || {};

        return acc + parseFloat(balance);
      }, 0)
);
