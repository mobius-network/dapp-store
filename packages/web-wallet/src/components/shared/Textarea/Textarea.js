import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, StyledTextarea, ErrorMessage } from './styles';

class Textarea extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object,
    meta: PropTypes.shape({
      error: PropTypes.string,
      dirty: PropTypes.bool,
      touched: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
  };

  render() {
    const {
      input,
      className,
      innerLabel,
      placeholder,
      meta: { error, dirty, touched },
      ...rest
    } = this.props;

    const showError = error && (dirty || touched);

    return (
      <Fragment>
        <Container className={className}>
          <StyledTextarea
            {...input}
            error={showError}
            placeholder={placeholder}
            {...rest}
          />
        </Container>

        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </Fragment>
    );
  }
}

export default Textarea;
