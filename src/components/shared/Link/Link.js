import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { colors } from 'components/shared/Styleguide';
import { StyledLink, StyledHyperlink } from './styles';

const themes = {
  default: {
    color: colors.textPrimary,
  },
  light: {
    color: colors.textWhite,
  },
};

class Link extends Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'light']),
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    theme: 'default',
  };

  render() {
    const {
      className, href, theme, to, ...rest
    } = this.props;

    return (
      <ThemeProvider theme={themes[theme]}>
        {to ? (
          <StyledLink className={className} to={to} {...rest} />
        ) : (
          <StyledHyperlink
            className={className}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            {...rest}
          />
        )}
      </ThemeProvider>
    );
  }
}

export default Link;
