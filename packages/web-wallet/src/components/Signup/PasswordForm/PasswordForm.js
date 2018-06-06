import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { required } from 'utils';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';
import TextInput from 'components/shared/TextInput';

import {
  LoginBlock,
  LoginBlockText,
  Form,
  Title,
  TextField,
  SubmitButton,
} from './styles';

export default class PasswordForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Fragment>
        <Pane theme="wide" withGradient>
          <Pane.Header
            title="Sign Up"
            caption="We’ll create a new Mobius wallet for you to make purchases in the DApp store."
          />

          <Pane.Section>
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
              <SubmitButton onClick={handleSubmit}>Continue</SubmitButton>
            </Form>
          </Pane.Section>
        </Pane>

        <Pane theme="secondary">
          <Pane.Section>
            <LoginBlock>
              <LoginBlockText>Already have an account?</LoginBlockText>

              <Button to="/login" theme="primaryOutline">
                Login
              </Button>
            </LoginBlock>
          </Pane.Section>
        </Pane>
      </Fragment>
    );
  }
}
