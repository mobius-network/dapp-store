import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Caption } from './styles';

const Header = ({ title, caption }) => (
  <Container>
    {title && <Title>{title}</Title>}

    {caption && <Caption>{caption}</Caption>}
  </Container>
);

Header.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Header;
