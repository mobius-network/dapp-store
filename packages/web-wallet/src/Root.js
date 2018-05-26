import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';
import PublicRoute from 'components/shared/PublicRoute';

import Header from 'components/Header';
import DappStore from 'components/DappStore';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Onboarding from 'components/Onboarding';

// TODO: move me to saga
const waitForRequiredData = store => () =>
  new Promise(resolve => {
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
        <div>
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" component={DappStore} exact />
            <PublicRoute path="/login" component={Login} exact />
            <PublicRoute path="/signup" component={Signup} exact />
            <PrivateRoute path="/onboarding" component={Onboarding} />
          </Switch>
        </div>
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;
