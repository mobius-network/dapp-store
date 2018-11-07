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
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    validate: PropTypes.func,
  };

  render() {
    const {
      component,
      name,
      disabled,
      label,
      caption,
      validate,
      placeholder,
      ...rest
    } = this.props;

    return (
      <Container>
        {label && <Label>{label}</Label>}

        {caption && <Caption>{caption}</Caption>}

        <Field
          component={component}
          disabled={disabled}
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
