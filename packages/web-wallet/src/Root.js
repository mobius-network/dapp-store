import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { notify } from 'utils/honeybadger';

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
  componentDidCatch(error, info) {
    notify(error, info);
  }

  render() {
    const { store, persistor } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Router>
            <DefaultLayout>
              <Switch>
                <Route path="/" component={DappStore} exact />
                <PublicLayout path="/login" component={Login} exact />
                <PublicLayout path="/signup" component={Signup} exact />
                <OnboardingLayout path="/onboarding" component={Onboarding} />
                <WalletLayout path="/wallet" component={Wallet} />
                <DevelopersLayout path="/developers" component={Developers} />
              </Switch>
            </DefaultLayout>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default hot(module)(Root);
