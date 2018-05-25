import { all } from 'redux-saga/effects';

// Creates a generator which yields all sagas
export const yieldSagas = (...sagas) =>
  function* () {
    yield all(sagas);
  };
