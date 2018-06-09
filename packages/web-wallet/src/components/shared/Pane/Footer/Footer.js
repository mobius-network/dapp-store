import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  };

  render() {
    const { children, className } = this.props;

    return <Container className={className}>{children}</Container>;
  }
}
