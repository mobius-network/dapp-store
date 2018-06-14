import { get } from 'lodash';
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

export const getFeaturedApp = createSelector(
  [getApps],
  apps => (apps || [])[0]
);
