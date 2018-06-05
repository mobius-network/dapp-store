import React, { Fragment } from 'react';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

import { LoginForm, SignupBlock, SignupBlockText } from './styles';

const Login = () => (
  <Fragment>
    <Pane theme="wide">
      <Pane.Header
        title="Login"
        caption="Access your wallet and submit DApps."
      />

      <Pane.Section>
        <LoginForm />
      </Pane.Section>
    </Pane>

    <Pane theme="secondary">
      <Pane.Section>
        <SignupBlock>
          <SignupBlockText>Don’t have an account?</SignupBlockText>

          <Button to="/signup" theme="primaryOutline">
            Sign Up
          </Button>
        </SignupBlock>
      </Pane.Section>
    </Pane>
  </Fragment>
);

export default Login;
