import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import waitForMasterAccount from 'state/auth/waitForMasterAccount';

import OnboardingLayout from 'components/layouts/OnboardingLayout';
import DefaultLayout from 'components/layouts/DefaultLayout';
import DappStoreLayout from 'components/layouts/DappStoreLayout';
import PublicLayout from 'components/layouts/PublicLayout';
import Footer from 'components/Footer';
import Loading from 'components/Loading';

import DappStore from 'components/DappStore';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Onboarding from 'components/Onboarding';

export default class Root extends Component {
  render() {
    const { store, persistor } = this.props;

    return (
      <Provider store={store}>
        <DefaultLayout>
          <PersistGate
            loading={<Loading />}
            persistor={persistor}
            onBeforeLift={waitForMasterAccount(store)}
          >
            <Router>
              <Fragment>
                <Switch>
                  <DappStoreLayout path="/" component={DappStore} exact />

                  <PublicLayout path="/login" component={Login} exact />
                  <PublicLayout path="/signup" component={Signup} exact />

                  <OnboardingLayout path="/onboarding" component={Onboarding} />
                </Switch>

                <Footer />
              </Fragment>
            </Router>
          </PersistGate>
        </DefaultLayout>
      </Provider>
    );
  }
}
