import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { Container, Label, Caption } from './styles';

class FormRow extends Component {
  static propTypes = {
    caption: PropTypes.any,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
    disabled: PropTypes.bool,
    inputProps: PropTypes.object,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    validate: PropTypes.func,
  };

  static defaultProps = {
    required: false,
    disabled: false,
  };

  render() {
    const {
      caption,
      component,
      disabled,
      inputProps,
      label,
      name,
      placeholder,
      required,
      validate,
      ...rest
    } = this.props;

    return (
      <Container>
        {label && (
          <Label htmlFor={name} required={required}>
            {label}
          </Label>
        )}

        {caption && <Caption>{caption}</Caption>}

        <Field
          component={component}
          disabled={disabled}
          inputProps={inputProps}
          name={name}
          placeholder={placeholder}
          validate={validate}
          {...rest}
        />
      </Container>
    );
  }
}

export default FormRow;
