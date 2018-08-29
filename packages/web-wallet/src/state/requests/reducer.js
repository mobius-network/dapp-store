import { createActions, createReducer } from 'redux-yo';
import { update, merge } from 'state/utils';
import store from '../configureStore';

export const requestActions = createActions(
  [
    'fetchStart',
    'fetchSuccess',
    'fetchFail',
    'resetRequest',
    'setEntities',
    'deleteEntities',
  ],
  'requests'
);

const initialState = {
  errors: [],
  entities: {},
};

const entitiesUpdate = (state, entities) => Object.entries(entities).reduce((acc, [key, value]) => {
  const operation = state.entities[key] ? '$merge' : '$set';

  acc[key] = { [operation]: value };

  return acc;
}, {});

export const requestsReducer = createReducer(
  {
    [requestActions.fetchStart]: (state, { name }) => merge(state, {
      [name]: {
        data: undefined,
        isFetching: true,
      },
    }),
    [requestActions.fetchSuccess]: (
      state,
      { name, data: { entities = {}, result, ...data } = {} }
    ) => {
      const updates = {};

      if (entities) {
        Object.assign(updates, { entities: entitiesUpdate(state, entities) });
      }

      if (name) {
        Object.assign(updates, {
          $merge: {
            [name]: {
              data,
              isFetching: false,
              result,
              success: true,
            },
          },
        });
      }

      return update(state, updates);
    },
    [requestActions.fetchFail]: (state, { name, error }) => ({
      ...state,
      [name]: {
        error,
        data: undefined,
        success: false,
        isFetching: false,
      },
      errors: [error, ...state.errors.slice(0, 4)],
    }),
    [requestActions.resetRequest]: (state, name) => merge(state, {
      [name]: {
        error: undefined,
        data: undefined,
        success: undefined,
        isFetching: false,
      },
    }),
    [requestActions.setEntities]: (state, entities) => update(state, {
      entities: entitiesUpdate(state, entities),
    }),
    [requestActions.deleteEntities]: (state, entities) => {
      const updates = Object.entries(entities).reduce((acc, [key, ids]) => {
        acc[key] = { $unset: ids };

        return acc;
      }, {});

      return update(state, { entities: updates });
    },
  },
  initialState
);

export const fetchStart = (payload, meta = {}) => {
  const fetchPromise = new Promise((resolve, reject) => {
    store.dispatch(
      requestActions.fetchStart(payload, {
        resolve: resp => {
          resolve(resp);
          if (meta.resolve) meta.resolve(resp);
        },
        reject: error => {
          reject(error);
          if (meta.reject) meta.reject(error);
        },
      })
    );
  });

  return fetchPromise;
};
