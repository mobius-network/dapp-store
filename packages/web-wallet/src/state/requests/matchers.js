import { requestActions } from './reducer';

export const matchFetchSuccess = name => ({ type, payload = {} }) => {
  const fetchSuccess = type === requestActions.fetchSuccess.type && payload.name === name;

  return fetchSuccess;
};
