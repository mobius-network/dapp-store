import updateSource from 'immutability-helper';
import { createReducer } from 'redux-yo';

import { currencies } from 'services/coinmarketcap';
import { pricesActions } from './actions';

const initialState = {};

export const pricesReducer = createReducer(
  {
    [pricesActions.setQuotes]: (state, quotes) => {
      const updates = Object.keys(quotes).reduce((acc, key) => {
        const assetName = currencies[key];
        const {
          quote: { USD },
        } = quotes[key];

        acc[assetName] = { usd: USD.price };

        return acc;
      }, {});

      return updateSource(state, {
        $merge: updates,
      });
    },
  },
  initialState
);
