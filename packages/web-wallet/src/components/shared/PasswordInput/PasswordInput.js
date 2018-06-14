import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-regular';

import {
  Container,
  InputContainer,
  Input,
  ErrorMessage,
  VisibilityToggle,
} from './styles';

class PasswordInput extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object,
    isPasswordVisible: PropTypes.bool,
    meta: PropTypes.shape({
      error: PropTypes.string,
      dirty: PropTypes.bool,
      touched: PropTypes.bool,
    }),
    onVisibilityToggle: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static getDerivedStateFromProps(props, state) {
    if (isNil(props.isPasswordVisible)) {
      return null;
    }

    if (props.isPasswordVisible === state.isPasswordVisible) {
      return null;
    }

    return {
      isPasswordVisible: props.isPasswordVisible,
    };
  }

  state = {
    isPasswordVisible: false,
  };

  handleVisibiltyToggle = () => {
    const isPasswordVisible = !this.state.isPasswordVisible;

    this.setState({ isPasswordVisible }, () => {
      if (this.props.onVisibilityToggle) {
        this.props.onVisibilityToggle(isPasswordVisible);
      }
    });
  };

  render() {
    const {
      input,
      placeholder,
      meta: { error, dirty, touched },
      ...rest
    } = this.props;
    const { isPasswordVisible } = this.state;

    const showError = error && (dirty || touched);

    return (
      <Container>
        <InputContainer>
          <Input
            {...input}
            error={showError}
            placeholder={placeholder}
            type={isPasswordVisible ? 'text' : 'password'}
            {...rest}
          />
          <VisibilityToggle type="button" onClick={this.handleVisibiltyToggle}>
            <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
          </VisibilityToggle>
        </InputContainer>

        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
}

export default PasswordInput;
