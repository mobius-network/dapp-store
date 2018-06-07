import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import { Container } from './styles';

export default class DappStoreLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
      <Route
        {...rest}
        component={matchProps => (
          <Container>
            <Header />

            <RouterComponent {...matchProps} />
          </Container>
        )}
      />
    );
  }
}
