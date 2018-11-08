import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Title>Submit DApp</Title>

        <Form onSubmit={handleSubmit}>
          <TextField component={TextInput} name="name" validate={required} />
          <TextField component={TextInput} name="url" validate={required} />

          <TextField component={TextInput} name="summary" validate={required} />
          <TextField
            component={Textarea}
            name="description"
            validate={required}
          />

          <UploadField
            component={FileInput}
            name="icon"
            onChange={this.onKeyUpload}
            validate={required}
          />
          <UploadField
            component={FileInput}
            name="screenshots"
            onChange={this.onKeyUpload}
            validate={required}
          />

          <SubmitButton onClick={handleSubmit}>Submit Draft</SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default SubmitDapp;
