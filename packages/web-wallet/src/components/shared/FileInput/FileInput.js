import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Input,
  ErrorMessage,
  Label,
  LabelText,
  LabelButton,
} from './styles';

class FileInput extends Component {
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

  constructor(props) {
    super(props);

    this.state = {
      value: props.input.value,
    };
  }

  getFileName = () => {
    const { value } = this.state;

    return value.length ? value[0].name : null;
  };

  handleChange = e => {
    const {
      target: { files: value },
    } = e;

    this.setState({ value }, () => this.props.input.onChange(value));
  };

  render() {
    const {
      input: { name, value },
      placeholder,
      meta: { error, dirty, touched },
    } = this.props;

    const showError = error && (dirty || touched);
    const showPlaceholder = placeholder && !value;
    const fileName = this.getFileName();

    return (
      <Container>
        <Input
          id={name}
          onChange={this.handleChange}
          placeholder={placeholder}
          type="file"
        />

        <Label htmlFor={name} error={showError}>
          <LabelText showPlaceholder={showPlaceholder}>
            {showPlaceholder ? placeholder : fileName}
          </LabelText>
          <LabelButton>Choose File</LabelButton>
        </Label>

        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
}

export default FileInput;
