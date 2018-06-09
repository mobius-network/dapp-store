import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Img } from './styles';

class Pic extends Component {
  static propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { className, url } = this.props;

    return (
      <Container className={className}>
        <Img src={url} />
      </Container>
    );
  }
}

export default Pic;
