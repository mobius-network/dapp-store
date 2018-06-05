import React, { Component } from 'react';
// import { string } from 'prop-types';
import { required } from 'utils';
import TextInput from 'components/shared/TextInput';

import { Form, Title, TextField, SubmitButton } from './styles';

class PasswordForm extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Title>PasswordForm</Title>
        <TextField
          name="password"
          component={TextInput}
          validate={required}
        />
        <TextField
          name="passwordConfirmation"
          component={TextInput}
          validate={required}
        />
        <SubmitButton
          onClick={handleSubmit}
        >
          Continue
        </SubmitButton>
      </Form>
    );
  }
}

export default PasswordForm;
