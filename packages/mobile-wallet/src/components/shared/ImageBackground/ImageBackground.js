import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import background from './images/bg.png';

class NoticeView extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return <Container source={background}>{children}</Container>;
  }
}

export default NoticeView;
