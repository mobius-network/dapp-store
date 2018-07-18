import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

import { accountReducer } from './account';
import { authReducer } from './auth';
import { notificationsReducer } from './notifications';
import { requestsReducer } from './requests';
import { submitDappReducer } from './submitDapp';
import { transfersReducer } from './transfers';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  masterAccount: accountReducer,
  notifications: notificationsReducer,
  requests: requestsReducer,
  submitDapp: submitDappReducer,
  transfers: transfersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export default () => persistReducer(persistConfig, rootReducer);
