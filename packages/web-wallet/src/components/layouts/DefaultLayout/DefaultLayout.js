import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Footer from 'components/Footer';

import { Container, Content } from './styles';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Container>
        <Content>
          <Component {...matchProps} />
        </Content>

        <Footer />
      </Container>
    )}
  />
);

DefaultLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default DefaultLayout;
