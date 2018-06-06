import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const appActions = createActions(['loadApps', 'stopWatching'], 'apps');

const initialState = {
  dummy: undefined,
};

export const appsReducer = createReducer(
  {
    [appActions.dummy]: (state, value) =>
      merge(state, {
        value,
      }),
  },
  initialState
);
