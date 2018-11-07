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
    meta: PropTypes.shape({
      dirty: PropTypes.bool,
      error: PropTypes.string,
      touched: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
    t: PropTypes.func.isRequired,
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

  handleChange = (e) => {
    const {
      target: { files: value },
    } = e;

    this.setState({ value }, () => this.props.input.onChange(value));
  };

  render() {
    const {
      input: { name, value },
      meta: { error, dirty, touched },
      placeholder,
      t,
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

        <Label error={showError} htmlFor={name}>
          <LabelText showPlaceholder={showPlaceholder}>
            {showPlaceholder ? placeholder : fileName}
          </LabelText>
          <LabelButton>{t('fileInput.buttonText')}</LabelButton>
        </Label>

        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
}

export default FileInput;
