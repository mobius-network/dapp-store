import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './styles';

class TextInput extends Component {
  static propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
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
      label,
      placeholder,
      meta: { error, dirty, touched },
      ...rest
    } = this.props;

    const showError = error && (dirty || touched);

    return (
      <Container>
        {label && <Label>{label}</Label>}

        <Input
          {...input}
          error={showError}
          placeholder={placeholder}
          onChangeText={input.onChange}
          {...rest}
        />
      </Container>
    );
  }
}

export default TextInput;
