import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { requestsReducer } from './requests';
import { transfersReducer } from './transfers';

const rootReducer = combineReducers({
  form: formReducer,
  requests: requestsReducer,

  auth: authReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  transfers: transfersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export default () => persistReducer(persistConfig, rootReducer);
