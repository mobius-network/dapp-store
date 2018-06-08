import { requestActions } from './reducer';

export const matchFetchSuccess = name => ({ type, payload = {} }) =>
  type === requestActions.fetchSuccess.type && payload.name === name;
