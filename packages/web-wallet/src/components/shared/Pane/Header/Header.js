import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Caption, Container, TextContainer, Title } from './styles';

export default class Header extends Component {
  static propTypes = {
    caption: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  render() {
    const {
      caption, children, className, title,
    } = this.props;

    return (
      <Container className={className}>
        <TextContainer>
          {title && <Title>{title}</Title>}

          {caption && <Caption>{caption}</Caption>}
        </TextContainer>

        {children}
      </Container>
    );
  }
}
