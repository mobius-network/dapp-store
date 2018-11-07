import React, { Component } from 'react';
// import { string } from 'prop-types';

import { StyledTextarea } from './styles';

class Textarea extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    const { input, ...rest } = this.props;

    return <StyledTextarea {...input} {...rest} />;
  }
}

export default Textarea;
