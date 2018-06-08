import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default class Section extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return <Container>{children}</Container>;
  }
}
