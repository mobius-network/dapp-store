import { requestActions } from './actions';

export const matchFetchSuccess = name => ({ type, payload = {} }) => type === requestActions.fetchSuccess.type && payload.name === name;
