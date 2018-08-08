import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import eventFilterMiddleware from 'event-filter-redux-middleware';

import { isDev } from 'utils/env';
import getReducer from './reducer';

const sagaMiddleware = typeof createSagaMiddleware === 'function'
  ? createSagaMiddleware()
  : createSagaMiddleware.default();

function enhance(middlewareArray = []) {
  let composeEnhancers = compose;
  const middlewares = middlewareArray;

  if (isDev) {
    // eslint-disable-next-line no-underscore-dangle
    const extCompose = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    const devtoolsCompose = extCompose
      && extCompose({
        // actionsBlacklist: ['account/setMasterAccount', 'apps/setAppAccount'],
      });

    composeEnhancers = devtoolsCompose || compose;

    if (!devtoolsCompose) {
      const { createLogger } = require('redux-logger');

      middlewares.push(createLogger({ collapsed: true }));
    }
  }

  const enhancers = [applyMiddleware(...middlewares)];

  return composeEnhancers(...enhancers)(createStore);
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
