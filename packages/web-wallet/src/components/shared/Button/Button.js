import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {
  StyledButton,
  StyledLink,
  Content,
  ExternalLink,
  LoadingIndicator,
} from './styles';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    square: PropTypes.bool,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    variant: PropTypes.oneOf([
      'primary',
      'primaryOutline',
      'secondary',
      'text',
    ]),
    wide: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    fullWidth: false,
    isLoading: false,
    variant: 'primary',
    wide: false,
  };

  render() {
    const {
      children,
      disabled,
      fullWidth,
      href,
      isLoading,
      onClick,
      square,
      to,
      variant,
      wide,
      ...rest
    } = this.props;

    // TODO: separate link and button components
    const LinkComponent = href ? ExternalLink : StyledLink;

    return (
      <ThemeProvider
        theme={{
          variant,
          fullWidth,
          square,
          wide,
        }}
      >
        {to || href ? (
          <LinkComponent href={href} onClick={onClick} to={to} {...rest}>
            <Content>{children}</Content>
          </LinkComponent>
        ) : (
          <StyledButton
            disabled={disabled || isLoading}
            onClick={onClick}
            type="button"
            {...rest}
          >
            <Content>{children}</Content>

            {isLoading && <LoadingIndicator />}
          </StyledButton>
        )}
      </ThemeProvider>
    );
  }
}
