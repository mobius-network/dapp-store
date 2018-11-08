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
        <PrivateRoute component={WelcomeScreen} exact path="/onboarding" />
        <PrivateRoute component={TransferXlm} exact path="/onboarding/xlm" />
        <PrivateRoute component={TransferMobi} exact path="/onboarding/mobi" />
      </Switch>
    );
  }
}

export default Onboarding;
