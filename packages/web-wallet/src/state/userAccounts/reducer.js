import { createReducer } from 'redux-yo';

import { userAccountsActions } from './actions';

const initialState = {};

export const userAccountsReducer = createReducer(
  {
    [userAccountsActions.setUserAccountData]: (state, { id, data }) => ({
      ...state,
      [id]: {
        ...state[id],
        ...data,
      },
    }),
  },
  initialState
);
