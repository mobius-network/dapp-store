import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

class VideoContent extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  render() {
    const { src } = this.props;

    return (
      <Container>
        <Content allowFullScreen frameBorder="0" src={src} />
      </Container>
    );
  }
}

export default VideoContent;
