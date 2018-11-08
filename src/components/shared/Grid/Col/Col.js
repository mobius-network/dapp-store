import React, { Component } from 'react';
import { Box } from 'grid-styled';

class Col extends Component {
  render() {
    const { ...colProps } = this.props;

    return <Box px={2} {...colProps} />;
  }
}

export default Col;
