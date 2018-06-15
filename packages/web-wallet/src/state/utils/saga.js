import { createActions } from 'redux-yo';
import { takeLatest } from 'redux-saga/effects';

export function createSaga(name, saga) {
  const actions = createActions(['sagaStart', 'sagaSuccess', 'sagaFail'], name);

  return {
    name,
    action: actions.sagaStart,

    saga,
    listener: takeLatest(actions.sagaStart, saga),
    ...actions,
  };
}
