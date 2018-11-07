import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Caption } from './styles';

export default class Header extends Component {
  static propTypes = {
    caption: PropTypes.any,
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  render() {
    const { title, caption, className } = this.props;

    return (
      <Container className={className}>
        {title && <Title>{title}</Title>}

        {caption && <Caption>{caption}</Caption>}
      </Container>
    );
  }
}
