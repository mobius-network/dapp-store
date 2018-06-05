import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { colors, gradients, shadows } from 'components/shared/Styleguide';
import { StyledButton, StyledLink, Content } from './styles';

const themes = {
  primary: {
    background: gradients.button,
    boxShadow: shadows.buttonPrimary,
    color: colors.textLight,
    contentBackground: 'transparent',
    fontWeight: 700,
  },
  primaryOutline: {
    background: gradients.button,
    boxShadow: shadows.buttonPrimary,
    color: '#6278F1',
    contentBackground: colors.bg,
    fontWeight: 700,
  },
  secondary: {
    background: colors.bgWhite,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.buttonSecondary,
    color: colors.textPrimary,
    contentBackground: colors.bgWhite,
    fontWeight: 400,
  },
};

const Button = ({
  children, disabled, theme, to, onClick, ...rest
}) => (
  <ThemeProvider theme={themes[theme]}>
    {to ? (
      <StyledLink to={to} {...rest}>
        <Content>{children}</Content>
      </StyledLink>
    ) : (
      <StyledButton
        disabled={disabled}
        onClick={onClick}
        type="button"
        {...rest}
      >
        <Content>{children}</Content>
      </StyledButton>
    )}
  </ThemeProvider>
);

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['primary', 'primaryOutline', 'secondary']),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Button.defaultProps = {
  disabled: false,
  theme: 'primary',
};

export default Button;
