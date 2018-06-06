import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Footer from 'components/Footer';

import { Container, Content } from './styles';

export default class DefaultLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <Container>
            <Content>
              <RouterComponent {...matchProps} />
            </Content>

            <Footer />
          </Container>
        )}
      />
    );
  }
}
