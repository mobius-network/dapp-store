import React, { Component } from 'react';
import { Flex } from 'grid-styled';

class Row extends Component {
  render() {
    const { ...rowProps } = this.props;

    return <Flex {...rowProps} />;
  }
}

export default Row;
