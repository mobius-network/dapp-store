import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

import { authReducer, authActions } from './auth';

const combined = combineReducers({
  auth: authReducer,
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = (state, action) => {
  if (action.type === authActions.logout) {
    return combined(undefined, action);
  }

  return combined(state, action);
};

export default () => persistReducer(persistConfig, rootReducer);
