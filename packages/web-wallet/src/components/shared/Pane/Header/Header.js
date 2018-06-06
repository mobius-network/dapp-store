import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Caption } from './styles';

export default class Header extends Component {
  static propTypes = {
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  render() {
    const { title, caption } = this.props;

    return (
      <Container>
        {title && <Title>{title}</Title>}

        {caption && <Caption>{caption}</Caption>}
      </Container>
    );
  }
}
