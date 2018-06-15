import { get, isEmpty } from 'lodash';
import { createSelector } from 'reselect';

export const getOperationName = (_, { operation } = {}) => operation;

export const getRequests = state => state.requests;

export const getResponse = createSelector(
  [getRequests, getOperationName],
  (requests, operation) => get(requests, `${operation}.data`)
);

export const getIsFetching = createSelector(
  [getRequests, getOperationName],
  (requests, operation) => get(requests, `${operation}.isFetching`)
);

export const getIsSuccess = createSelector(
  [getRequests, getOperationName],
  (requests, operation) => get(requests, `${operation}.success`)
);

export const getApps = state => get(state, 'requests.apps.data.apps');

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
