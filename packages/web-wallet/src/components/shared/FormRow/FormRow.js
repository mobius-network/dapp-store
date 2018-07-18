import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { Container, Label, Caption } from './styles';

class FormRow extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
    caption: PropTypes.any,
    disabled: PropTypes.bool,
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
      label,
      name,
      placeholder,
      required,
      validate,
      ...rest
    } = this.props;

    return (
      <Container>
        {label && <Label required={required}>{label}</Label>}

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
