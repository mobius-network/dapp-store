import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { colors, fontSizes, shadows } from 'components/shared/Styleguide';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import { Container, Gradient } from './styles';

const themes = {
  default: {
    background: colors.bgWhite,
    footerPadding: '10px 10px',
    headerFontSize: fontSizes.subHeading,
    headerPadding: '10px',
    headerSpacing: '5px',
    sectionPadding: '10px',
    shadow: shadows.pane,
  },
  narrow: {
    background: colors.bgWhite,
    footerPadding: '10px 25px',
    headerFontSize: fontSizes.heading,
    headerPadding: '25px',
    headerSpacing: '10px',
    sectionPadding: '25px',
    shadow: shadows.pane,
  },
  wide: {
    background: colors.bgWhite,
    footerPadding: '10px 15px',
    headerFontSize: fontSizes.paneHeading,
    headerPadding: '50px 60px',
    headerSpacing: '15px',
    sectionPadding: '50px 60px',
    shadow: shadows.pane,
  },
};

class Pane extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'narrow', 'wide']),
    withGradient: PropTypes.bool,
  };

  static defaultProps = {
    withGradient: false,
    theme: 'default',
  };

  render() {
    const {
      theme, withGradient, children, className,
    } = this.props;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Container className={className}>
          {withGradient && <Gradient />}

          {children}
        </Container>
      </ThemeProvider>
    );
  }
}

Pane.Header = Header;

Pane.Section = Section;

Pane.Footer = Footer;

export default Pane;
