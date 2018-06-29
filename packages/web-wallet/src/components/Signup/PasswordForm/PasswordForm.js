import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import FormRow from 'components/shared/FormRow';
import PasswordInput from 'components/shared/PasswordInput';
import AdditionalInfo from 'components/shared/AdditionalInfo';
import Button from 'components/shared/Button';

import { LoginBlock, LoginBlockText, ActionsRow } from './styles';

export default class PasswordForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    isPasswordVisible: false,
  };

  handlePasswordVisibilityToggle = isPasswordVisible =>
    this.setState({ isPasswordVisible });

  render() {
    const { submitting, handleSubmit } = this.props;
    const { isPasswordVisible } = this.state;

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
                component={PasswordInput}
                isPasswordVisible={isPasswordVisible}
                label="Set Password"
                name="password"
                onVisibilityToggle={this.handlePasswordVisibilityToggle}
              />

              <FormRow
                component={PasswordInput}
                isPasswordVisible={isPasswordVisible}
                label="Confirm Password"
                name="passwordConfirmation"
                onVisibilityToggle={this.handlePasswordVisibilityToggle}
              />

              <ActionsRow>
                <Button
                  type="submit"
                  isLoading={submitting}
                  onClick={handleSubmit}
                  fullWidth
                >
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
