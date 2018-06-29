import { isEmpty } from 'lodash';
import { createSelector } from 'reselect';
import {
  getAsset,
  createBalanceSelector,
  createAssetBalanceSelector,
} from 'state/account/selectors';

import { getEntities, getEntitiesObject } from 'state/requests';

export const getAppId = (_, { appId } = {}) => appId;

export const getApps = state => getEntities(state, { entity: 'apps' });

export const getFeaturedApp = createSelector([getApps], apps => {
  if (isEmpty(apps)) {
    return undefined;
  }

  const featuredApps = apps.filter(app => app.featured);

  if (isEmpty(featuredApps)) {
    return apps[0];
  }

  return featuredApps[Math.floor(Math.random() * featuredApps.length)];
});

export const getAppAccountsObject = state =>
  getEntitiesObject(state, { entity: 'appAccounts' });

export const getAppAccounts = state =>
  getEntities(state, { entity: 'appAccounts' });

export const getAppAccount = createSelector(
  [getAppAccountsObject, getAppId],
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
          app.balances.find(data =>
            assetRegexp.test(data.asset_type) ||
              assetRegexp.test(data.asset_code)) || {};

        return acc + parseFloat(balance);
      }, 0)
);
