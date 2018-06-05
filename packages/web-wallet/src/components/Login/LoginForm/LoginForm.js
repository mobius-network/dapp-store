import React, { Component } from 'react';
// import { string } from 'prop-types';
import { required } from 'utils';
import TextInput from 'components/shared/TextInput';
import FileInput from 'components/shared/FileInput';

import { Form, Title, TextField, UploadField, SubmitButton } from './styles';

class LoginForm extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  onKeyUpload = (event, [keyfile] = []) => {
    if (!keyfile) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.props.change('keyfile', reader.result);
    };

    reader.readAsText(keyfile);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Title>Login Form</Title>
        <TextField name="password" component={TextInput} validate={required} />
        <UploadField
          name="keyfile"
          component={FileInput}
          validate={required}
          onChange={this.onKeyUpload}
        />
        <SubmitButton onClick={handleSubmit}>Login</SubmitButton>
      </Form>
    );
  }
}

export default LoginForm;
