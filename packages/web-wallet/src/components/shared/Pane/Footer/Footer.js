import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Footer = ({ children }) => <Container>{children}</Container>;

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
