import { get } from 'lodash';
import { createSelector } from 'reselect';

export const getOperationName = (_, { operation } = {}) => operation;
export const getEntityName = (_, { entity } = {}) => entity;

export const getRequests = state => state.requests;
export const getAllEntities = state => state.requests.entities;

export const getResponse = createSelector(
  [getRequests, getOperationName],
  (requests, operation) => get(requests, `${operation}.data`)
);

export const getResult = createSelector(
  [getRequests, getOperationName],
  (requests, operation) => get(requests, `${operation}.result`)
);

export const getIsFetching = createSelector(
  [getRequests, getOperationName],
  (requests, operation) => get(requests, `${operation}.isFetching`)
);

export const getIsSuccess = createSelector(
  [getRequests, getOperationName],
  (requests, operation) => get(requests, `${operation}.success`)
);

export const getEntitiesObject = createSelector(
  [getAllEntities, getEntityName],
  (entities, name) => entities[name] || {}
);

export const getEntities = createSelector([getEntitiesObject], entities => Object.values(entities));
