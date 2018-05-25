import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

import WelcomeScreen from './WelcomeScreen';
import TransferXlm from './TransferXlm';
import TransferMobi from './TransferMobi';

class Onboarding extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/onboarding" component={WelcomeScreen} exact />
        <PrivateRoute path="/onboarding/xlm" component={TransferXlm} exact />
        <PrivateRoute path="/onboarding/mobi" component={TransferMobi} exact />
      </Switch>
    );
  }
}

export default Onboarding;
