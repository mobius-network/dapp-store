import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { notify } from 'utils/honeybadger';
import i18n from 'utils/i18n';
import waitForMasterAccount from 'state/auth/waitForMasterAccount';

import DefaultLayout from 'components/layouts/DefaultLayout';
import DevelopersLayout from 'components/layouts/DevelopersLayout';
import OnboardingLayout from 'components/layouts/OnboardingLayout';
import PublicLayout from 'components/layouts/PublicLayout';
import WalletLayout from 'components/layouts/WalletLayout';
import Loading from 'components/Loading';

import DappStore from 'components/DappStore';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Onboarding from 'components/Onboarding';
import Wallet from 'components/Wallet';
import Developers from 'components/Developers';

class Root extends Component {
  static propTypes = {
    persistor: PropTypes.object,
    store: PropTypes.object,
  };

  componentDidCatch(error, info) {
    notify(error, info);
  }

  render() {
    const { store, persistor } = this.props;

    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <PersistGate
            loading={<Loading fullScreen />}
            onBeforeLift={waitForMasterAccount(store)}
            persistor={persistor}
          >
            <Router>
              <DefaultLayout>
                <Switch>
                  <Route component={DappStore} exact path="/" />
                  <PublicLayout component={Login} exact path="/login" />
                  <PublicLayout component={Signup} exact path="/signup" />
                  <OnboardingLayout component={Onboarding} path="/onboarding" />
                  <WalletLayout component={Wallet} path="/wallet" />
                  <DevelopersLayout component={Developers} path="/developers" />
                </Switch>
              </DefaultLayout>
            </Router>
          </PersistGate>
        </I18nextProvider>
      </Provider>
    );
  }
}

export default hot(module)(Root);
