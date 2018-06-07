import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import AdditionalInfo from 'components/shared/AdditionalInfo';
import Button from 'components/shared/Button';

import { LoginBlock, LoginBlockText, ActionsRow } from './styles';

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
            <form onSubmit={handleSubmit}>
              <FormRow
                component={TextInput}
                name="password"
                label="Set Password"
              />

              <FormRow
                component={TextInput}
                name="passwordConfirmation"
                label="Confirm Password"
              />

              <ActionsRow>
                <Button onClick={handleSubmit} fullWidth>
                  Continue
                </Button>
              </ActionsRow>
            </form>
          </Pane.Section>
        </Pane>

        <AdditionalInfo>
          <LoginBlock>
            <LoginBlockText>Already have an account?</LoginBlockText>

            <Button to="/login" theme="primaryOutline" wide>
              Login
            </Button>
          </LoginBlock>
        </AdditionalInfo>
      </Fragment>
    );
  }
}
