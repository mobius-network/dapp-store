import React, { Component } from 'react';
// import { string } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

import MyDapps from './MyDapps';
import SubmitDapp from './SubmitDapp';
import GettingStarted from './GettingStarted';
import { Container, Title } from './styles';

class Developers extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>Developers</Title>
        <Switch>
          <PrivateRoute
            path="/developers"
            redirectTo="start"
            component={MyDapps}
            exact
          />
          <PrivateRoute
            path="/developers/submit"
            redirectTo="start"
            component={SubmitDapp}
            exact
          />
          <Route path="/developers/start" component={GettingStarted} />
        </Switch>
      </Container>
    );
  }
}

export default Developers;
