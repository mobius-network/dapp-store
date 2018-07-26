import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';

class AdditionalInfo extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    const { children, className, label } = this.props;

    return (
      <Container className={className}>
        {label && <Label>{label}</Label>}
        {children}
      </Container>
    );
  }
}

export default AdditionalInfo;
