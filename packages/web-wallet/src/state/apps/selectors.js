// import { get } from 'lodash';
import { createSelector } from 'reselect';
import {
  createBalanceSelector,
  createAssetBalanceSelector,
} from 'state/account/selectors';

export const getAppId = (_, { appId } = {}) => appId;

export const getApps = state => state.apps;

export const getAppAccount = createSelector(
  [getApps, getAppId],
  (apps, id) => apps[id]
);

export const getAppBalance = createBalanceSelector(getAppAccount);
export const getAppAssetBalance = createAssetBalanceSelector(getAppBalance);
