import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Input, ErrorMessage } from './styles';

class TextInput extends Component {
  static propTypes = {
    // name: string.isRequired,
  }

  render() {
    const {
      input,
      required,
      className,
      errorLabel,
      placeholder,
      meta: { error, dirty, touched },
    } = this.props;

    return (
      <Container
        required={required}
        className={className}
      >
        <Input
          autoFocus
          {...input}
          error={error && (dirty || touched)}
          required={required}
          placeholder={placeholder}
        />
        {
          error && (dirty || touched) &&
          <ErrorMessage error={error}>{errorLabel} {error}</ErrorMessage>
        }
      </Container>
    );
  }
}

export default TextInput;
