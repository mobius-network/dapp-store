import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {
  themes, Container, Input, ErrorMessage, InnerLabel,
} from './styles';

class TextInput extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object,
    meta: PropTypes.shape({
      dirty: PropTypes.bool,
      error: PropTypes.string,
      touched: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
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
        <Fragment>
          <Container className={className}>
            <Input
              {...input}
              error={showError}
              placeholder={placeholder}
              {...rest}
            />

            {innerLabel && <InnerLabel>{innerLabel}</InnerLabel>}
          </Container>

          {showError && <ErrorMessage>{error}</ErrorMessage>}
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default TextInput;
