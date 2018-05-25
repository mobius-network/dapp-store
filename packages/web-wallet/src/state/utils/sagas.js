import { takeLatest, all } from 'redux-saga/effects';

// Creates a generator which yields all sagas using takeLatest util
export const yieldSagas = (...mappings) =>
  function* () {
    const sagas = mappings.map(mapping => {
      const [saga, action] = Object.entries(mapping)[0];

      return takeLatest(action, saga);
    });

    yield all(sagas);
  };
