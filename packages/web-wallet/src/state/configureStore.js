import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import eventFilterMiddleware from 'event-filter-redux-middleware';

import { isDev } from 'utils/env';
import getReducer from './reducer';

const sagaMiddleware =
  typeof createSagaMiddleware === 'function'
    ? createSagaMiddleware()
    : createSagaMiddleware.default();

function enhance(middlewareArray = []) {
  const middlewares = middlewareArray;

  if (isDev) {
    const { createLogger } = require('redux-logger');

    middlewares.push(createLogger({ collapsed: true }));
  }

  const enhancers = [applyMiddleware(...middlewares)];

  return compose(...enhancers)(createStore);
}

function makeStore(initialState = {}) {
  const createStoreWithMiddleware = enhance([
    sagaMiddleware,
    eventFilterMiddleware,
  ]);

  const store = createStoreWithMiddleware(getReducer(), initialState);

  store.runSaga = sagaMiddleware.run;

  return store;
}

const store = makeStore();

export const persistor = persistStore(store);

export default store;
