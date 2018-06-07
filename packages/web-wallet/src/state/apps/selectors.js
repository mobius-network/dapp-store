// import { get } from 'lodash';
import { createSelector } from 'reselect';

export const getAppId = (_, id) => id;

export const getApps = state => state.apps;

export const getAppAccount = createSelector(
  [getApps, getAppId],
  (apps, id) => apps[id]
);
