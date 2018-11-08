import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Notifications from './Notifications';

import { Container, Content } from './styles';

export default class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return (
      <Container>
        <Notifications />
        <Content>{children}</Content>
        <Footer />
      </Container>
    );
  }
}
