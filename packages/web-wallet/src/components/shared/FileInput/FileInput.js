import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Input, ErrorMessage } from './styles';

class FileInput extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    const {
      input: { onChange },
      required,
      className,
      errorLabel,
      placeholder,
      meta: { error, dirty, touched },
    } = this.props;

    const showError = error && (dirty || touched);

    return (
      <Container required={required} className={className}>
        <Input
          type="file"
          error={showError}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
        {showError && (
          <ErrorMessage error={error}>
            {errorLabel} {error}
          </ErrorMessage>
        )}
      </Container>
    );
  }
}

export default FileInput;
