import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

import DappStoreLayout from 'components/layouts/DappStoreLayout';
import PublicLayout from 'components/layouts/PublicLayout';

import DappStore from 'components/DappStore';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Onboarding from 'components/Onboarding';

// TODO: move me to saga
const waitForRequiredData = store => () =>
  new Promise(resolve => {
    if (!store.getState().auth.loggedIn) {
      resolve();
      return;
    }

    store.subscribe(() => {
      if (store.getState().balance.masterAccount) {
        resolve();
      }
    });
  });

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
      onBeforeLift={waitForRequiredData(store)}
    >
      <Router>
        <Switch>
          <DappStoreLayout path="/" component={DappStore} exact />

          <PublicLayout path="/login" component={Login} exact />
          <PublicLayout path="/signup" component={Signup} exact />

          <PrivateRoute path="/onboarding" component={Onboarding} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;
