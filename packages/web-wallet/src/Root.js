import { hot } from 'react-hot-loader';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import waitForMasterAccount from 'state/auth/waitForMasterAccount';

import OnboardingLayout from 'components/layouts/OnboardingLayout';
import DefaultLayout from 'components/layouts/DefaultLayout';
import PublicLayout from 'components/layouts/PublicLayout';
import WalletLayout from 'components/layouts/WalletLayout';
import Footer from 'components/Footer';
import Loading from 'components/Loading';

import DappStore from 'components/DappStore';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Onboarding from 'components/Onboarding';
import Wallet from 'components/Wallet';
import Developers from 'components/Developers';

class Root extends Component {
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
                  <Route path="/" component={DappStore} exact />
                  <PublicLayout path="/login" component={Login} exact />
                  <PublicLayout path="/signup" component={Signup} exact />

                  <OnboardingLayout path="/onboarding" component={Onboarding} />
                  <WalletLayout path="/wallet" component={Wallet} />

                  <Route path="/developers" component={Developers} />
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

export default hot(module)(Root);
