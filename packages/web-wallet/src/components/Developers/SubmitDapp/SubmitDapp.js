import React, { Component } from 'react';
import TextInput from 'components/shared/TextInput';
import FileInput from 'components/shared/FileInput';
import Textarea from 'components/shared/Textarea';

import {
  Container,
  Title,
  Form,
  TextField,
  UploadField,
  SubmitButton,
} from './styles';

// TODO: move to utils
const required = v => !!v;

class SubmitDapp extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Title>Submit DApp</Title>

        <Form onSubmit={handleSubmit}>
          <TextField name="name" component={TextInput} validate={required} />
          <TextField name="url" component={TextInput} validate={required} />

          <TextField name="summary" component={TextInput} validate={required} />
          <TextField
            name="description"
            component={Textarea}
            validate={required}
          />

          <UploadField
            name="icon"
            component={FileInput}
            validate={required}
            onChange={this.onKeyUpload}
          />
          <UploadField
            name="screenshots"
            component={FileInput}
            validate={required}
            onChange={this.onKeyUpload}
          />

          <SubmitButton onClick={handleSubmit}>Submit Draft</SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default SubmitDapp;
