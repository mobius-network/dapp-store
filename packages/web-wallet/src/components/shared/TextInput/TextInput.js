import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Input, ErrorMessage } from './styles';

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
      placeholder,
      meta: { error, dirty, touched },
      ...rest
    } = this.props;

    const showError = error && (dirty || touched);

    return (
      <Container>
        <Input
          {...input}
          error={showError}
          placeholder={placeholder}
          {...rest}
        />

        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
}

export default TextInput;
