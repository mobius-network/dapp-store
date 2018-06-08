import React, { Component } from 'react';
// import { string } from 'prop-types';
import { required } from 'utils';
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

class SubmitDapp extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

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
