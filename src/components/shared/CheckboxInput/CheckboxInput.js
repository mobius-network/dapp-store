import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { faCheck } from '@fortawesome/fontawesome-free-solid';

import {
  Control,
  ControlIcon,
  ErrorMessage,
  HiddenCheckbox,
  Label,
  Text,
} from './styles';

class CheckboxInput extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object,
    inputProps: PropTypes.object,
    meta: PropTypes.shape({
      dirty: PropTypes.bool,
      error: PropTypes.string,
      touched: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
  };

  render() {
    const {
      className,
      input,
      inputProps,
      meta: { error, dirty, touched },
      name,
      ...rest
    } = this.props;

    const showError = error && (dirty || touched);

    return (
      <Fragment>
        <Label className={className} htmlFor={name}>
          <HiddenCheckbox type="checkbox" {...input} {...rest} />

          <Control error={showError}>
            {input.value && <ControlIcon icon={faCheck} />}
          </Control>
          <Text>{inputProps.label}</Text>
        </Label>

        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </Fragment>
    );
  }
}

export default CheckboxInput;
