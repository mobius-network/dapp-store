import React, { Component, Fragment } from 'react';

import Pane from 'components/shared/Pane';
import AdditionalInfo from 'components/shared/AdditionalInfo';
import Button from 'components/shared/Button';

import { LoginForm, SignupBlock, SignupBlockText } from './styles';

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <Pane theme="wide" withGradient>
          <Pane.Header
            title="Login"
            caption="Access your wallet and submit DApps."
          />

          <Pane.Section>
            <LoginForm />
          </Pane.Section>
        </Pane>

        <AdditionalInfo>
          <SignupBlock>
            <SignupBlockText>Don’t have an account?</SignupBlockText>

            <Button to="/signup" theme="primaryOutline" wide>
              Sign Up
            </Button>
          </SignupBlock>
        </AdditionalInfo>
      </Fragment>
    );
  }
}
