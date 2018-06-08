import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth';
import { accountReducer } from './account';
import { transfersReducer } from './transfers';
import { appsReducer } from './apps';
import { requestsReducer } from './requests';

const rootReducer = combineReducers({
  auth: authReducer,
  masterAccount: accountReducer,
  transfers: transfersReducer,
  apps: appsReducer,
  requests: requestsReducer,
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export default () => persistReducer(persistConfig, rootReducer);
