import { pick } from 'lodash';
import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const requestActions = createActions(
  ['fetchStart', 'fetchSuccess', 'fetchFail', 'resetRequest', 'shiftError'],
  'requests'
);

const initialState = {
  errors: [],
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
      const serializedError = pick(error, ['message', 'stack', 'response']);

      return {
        ...state,
        [name]: {
          error: serializedError,
          data: undefined,
          success: false,
          isFetching: false,
        },
        errors: [serializedError, ...state.errors],
      };
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
    [requestActions.shiftError]: state => ({
      ...state,
      errors: state.errors.slice(1),
    }),
  },
  initialState
);
