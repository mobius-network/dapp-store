import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

import { authActions } from 'state/auth/reducer';

export const appActions = createActions(
  ['loadApps', 'stopWatching', 'depositApp', 'setAppAccount'],
  'apps'
);

const initialState = {};

export const appsReducer = createReducer(
  {
    [appActions.setAppAccount]: (state, { account, app }) =>
      merge(state, {
        [app.id]: account,
      }),
    [authActions.logout]: () => initialState,
  },
  initialState
);
