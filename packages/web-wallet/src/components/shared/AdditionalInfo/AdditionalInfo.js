import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

class AdditionalInfo extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    return <Container className={className}>{children}</Container>;
  }
}

export default AdditionalInfo;
