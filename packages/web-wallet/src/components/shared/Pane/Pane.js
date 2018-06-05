import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { colors, fontSizes } from 'components/shared/Styleguide';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import { Container, Gradient } from './styles';

const themes = {
  default: {
    background: colors.bgWhite,
    headerFontSize: fontSizes.subHeading,
    headerPadding: '10px',
    headerSpacing: '5px',
    sectionPadding: '10px',
  },
  narrow: {
    background: colors.bgWhite,
    headerFontSize: fontSizes.heading,
    headerPadding: '25px',
    headerSpacing: '10px',
    sectionPadding: '25px',
  },
  secondary: {
    background: colors.bg,
    headerFontSize: fontSizes.heading,
    headerPadding: '25px',
    headerSpacing: '10px',
    sectionPadding: '25px',
  },
  wide: {
    background: colors.bgWhite,
    headerFontSize: fontSizes.paneHeading,
    headerPadding: '50px 60px',
    headerSpacing: '15px',
    sectionPadding: '50px 60px',
  },
};

const Pane = ({ children, theme, withGradient }) => (
  <ThemeProvider theme={themes[theme]}>
    <Container>
      {withGradient && <Gradient />}

      {children}
    </Container>
  </ThemeProvider>
);

Pane.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.oneOf(['default', 'narrow', 'secondary', 'wide']),
  withGradient: PropTypes.bool,
};

Pane.defaultProps = {
  withGradient: false,
  theme: 'default',
};

Pane.Header = Header;

Pane.Section = Section;

Pane.Footer = Footer;

export default Pane;
