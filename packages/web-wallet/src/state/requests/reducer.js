import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const requestActions = createActions(
  ['fetchStart', 'fetchSuccess', 'fetchFail', 'resetRequest', 'resetError'],
  'requests'
);

const initialState = {
  requestError: undefined,
};

export const requestsReducer = createReducer(
  {
    [requestActions.fetchStart]: (state, { name }) =>
      merge(state, {
        [name]: {
          data: undefined,
          isFetching: true,
        },
      }),
    [requestActions.fetchSuccess]: (state, { name, data }) =>
      merge(state, {
        [name]: {
          data,
          success: true,
          isFetching: false,
        },
      }),
    [requestActions.fetchFail]: (state, { name, error }) => {
      const serializedError = {
        message: error.message,
        stack: error.stack,
        response: error.response,
      };

      return merge(state, {
        [name]: {
          error: serializedError,
          data: undefined,
          success: false,
          isFetching: false,
        },
        requestError: serializedError,
      });
    },
    [requestActions.resetRequest]: (state, name) =>
      merge(state, {
        [name]: {
          error: undefined,
          data: undefined,
          success: undefined,
          isFetching: false,
        },
      }),
    [requestActions.resetError]: state =>
      merge(state, {
        requestError: undefined,
      }),
  },
  initialState
);
