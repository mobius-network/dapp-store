import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Section = ({ children }) => <Container>{children}</Container>;

Section.propTypes = {
  children: PropTypes.any,
};

export default Section;
