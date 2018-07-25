import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { colors, gradients, shadows } from 'components/shared/Styleguide';
import {
  StyledButton,
  StyledLink,
  Content,
  ExternalLink,
  LoadingIndicator,
} from './styles';

const themes = {
  primary: {
    background: gradients.button,
    boxShadow: shadows.buttonPrimary,
    color: colors.textWhite,
    contentBackground: 'transparent',
    fontWeight: 700,
    border: 'none',
  },
  primaryOutline: {
    background: gradients.button,
    color: '#6278F1',
    contentBackground: colors.bg,
    fontWeight: 700,
    border: 'none',
  },
  secondary: {
    background: colors.bgWhite,
    boxShadow: shadows.buttonSecondary,
    color: colors.textPrimary,
    contentBackground: colors.bgWhite,
    fontWeight: 400,
    border: `1px solid ${colors.border}`,
    loadingIndicatorColor: colors.textPrimary,
  },
  text: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    color: colors.textPrimary,
    contentBackground: 'none',
    fontWeight: 400,
    loadingIndicatorColor: colors.textPrimary,
  },
};

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    square: PropTypes.bool,
    theme: PropTypes.oneOf(['primary', 'primaryOutline', 'secondary', 'text']),
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    wide: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    theme: 'primary',
  };

  render() {
    const {
      children,
      disabled,
      fullWidth,
      onClick,
      square,
      theme,
      to,
      href,
      wide,
      isLoading,
      ...rest
    } = this.props;

    // TODO: separate link and button components
    const LinkComponent = href ? ExternalLink : StyledLink;

    return (
      <ThemeProvider theme={themes[theme]}>
        {to || href ? (
          <LinkComponent
            fullWidth={fullWidth}
            href={href}
            onClick={onClick}
            square={square}
            to={to}
            {...rest}
          >
            <Content fullWidth={fullWidth} square={square} wide={wide}>
              {children}
            </Content>
          </LinkComponent>
        ) : (
          <StyledButton
            disabled={disabled || isLoading}
            fullWidth={fullWidth}
            onClick={onClick}
            square={square}
            type="button"
            {...rest}
          >
            <Content fullWidth={fullWidth} square={square} wide={wide}>
              {children}
            </Content>

            {isLoading && <LoadingIndicator />}
          </StyledButton>
        )}
      </ThemeProvider>
    );
  }
}
