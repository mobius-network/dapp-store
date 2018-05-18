import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const balanceActions = createActions(['dummy'], 'balance');

const initialState = {
  dummy: 'value',
};

export const balanceReducer = createReducer(
  {
    [balanceActions.dummy]: (state, value) =>
      merge(state, {
        value,
      }),
  },
  initialState
);

export * from './selectors';
