import React, { Component } from 'react';
import { string } from 'prop-types';

import { Container, Icon } from './styles';

class Spinner extends Component {
  static propTypes = {
    className: string,
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <Container className={className}>
        <Icon {...rest} />
      </Container>
    );
  }
}

export default Spinner;
