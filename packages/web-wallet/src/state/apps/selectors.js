import { isEmpty, find } from 'lodash';
import { createSelector } from 'reselect';
import {
  getAsset,
  createBalanceSelector,
  createAssetBalanceSelector,
} from 'state/account/selectors';

import {
  getEntities,
  getResult,
  getEntitiesObject,
  getIsFetching,
} from 'state/requests';

export const getAppId = (_, { appId } = {}) => appId;

export const getApps = createSelector(
  state => getEntities(state, { entity: 'apps' }),
  state => getResult(state, { operation: 'apps' }),
  (apps, result) => {
    if (isEmpty(result)) {
      return apps;
    }

    return result.map(id => find(apps, ['id', id]));
  }
);

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

export const getAppIsOpening = createSelector(
  state => getIsFetching(state, { operation: 'getChallenge' }),
  state => getIsFetching(state, { operation: 'getToken' }),
  state => getIsFetching(state, { operation: 'createAppAccount' }),
  (isChallengeFetching, isTokenFetching, isAccountCreating) =>
    isChallengeFetching || isTokenFetching || isAccountCreating
);
