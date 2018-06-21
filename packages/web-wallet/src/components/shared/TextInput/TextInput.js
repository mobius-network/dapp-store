import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { themes, Container, Input, ErrorMessage, InnerLabel } from './styles';

class TextInput extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object,
    placeholder: PropTypes.string,
    meta: PropTypes.shape({
      error: PropTypes.string,
      dirty: PropTypes.bool,
      touched: PropTypes.bool,
    }),
  };

  render() {
    const {
      input,
      className,
      innerLabel,
      placeholder,
      meta: { error, dirty, touched },
      ...rest
    } = this.props;

    const showError = error && (dirty || touched);
    const theme = innerLabel ? 'innerLabel' : 'primary';

    return (
      <ThemeProvider theme={themes[theme]}>
        <Container className={className}>
          <Input
            {...input}
            error={showError}
            placeholder={placeholder}
            {...rest}
          />

          {innerLabel && <InnerLabel>{innerLabel}</InnerLabel>}

          {showError && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
      </ThemeProvider>
    );
  }
}

export default TextInput;
