import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

// import MyDapps from './MyDapps';
// import SubmitDapp from './SubmitDapp';
import GettingStarted from './GettingStarted';
import { Container, Title } from './styles';

class Developers extends Component {
  render() {
    return (
      <Container>
        <Title>Developers Section</Title>
        <Switch>
          <PrivateRoute
            path="/developers"
            redirectTo="start"
            component={GettingStarted}
            exact
          />
          <Route path="/developers/start" component={GettingStarted} />
        </Switch>
      </Container>
    );
  }
}

export default Developers;
