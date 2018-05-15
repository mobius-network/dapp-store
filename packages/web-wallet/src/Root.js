import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from 'components/App';
import Signup from 'components/Signup';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
