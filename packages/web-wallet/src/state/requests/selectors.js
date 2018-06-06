import { get } from 'lodash';
// import { createSelector } from 'reselect';

export const getRequests = state => state.requests;
export const getResponse = name => state => get(state, `requests.${name}.data`);
export const getIsFetching = name => state =>
  get(state, `requests.${name}.isFetching`);

export const getApps = state => get(state, 'requests.apps.data.apps');
