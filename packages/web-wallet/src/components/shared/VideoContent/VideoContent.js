import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

class VideoContent extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  render() {
    const { src, ...rest } = this.props;

    return (
      <Container>
        <Content allowFullScreen frameBorder="0" src={src} {...rest} />
      </Container>
    );
  }
}

export default VideoContent;
