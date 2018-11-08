import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import FormRow from 'components/shared/FormRow';
import PasswordInput from 'components/shared/PasswordInput';
import AdditionalInfo from 'components/shared/AdditionalInfo';
import Button from 'components/shared/Button';

import { LoginBlock, LoginBlockText, ActionsRow } from './styles';

class PasswordForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    t: PropTypes.func.isRequired,
  };

  state = {
    isPasswordVisible: false,
  };

  handlePasswordVisibilityToggle = isPasswordVisible => this.setState({ isPasswordVisible });

  render() {
    const { submitting, handleSubmit, t } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <Fragment>
        <Pane theme="wide" withGradient>
          <Pane.Header
            caption={t('passwordForm.caption')}
            title={t('passwordForm.title')}
          />

          <Pane.Section>
            <form onSubmit={handleSubmit}>
              <FormRow
                component={PasswordInput}
                isPasswordVisible={isPasswordVisible}
                label={t('passwordForm.passwordFieldLabel')}
                name="password"
                onVisibilityToggle={this.handlePasswordVisibilityToggle}
              />

              <FormRow
                component={PasswordInput}
                isPasswordVisible={isPasswordVisible}
                label={t('passwordForm.passwordConfirmationLabel')}
                name="passwordConfirmation"
                onVisibilityToggle={this.handlePasswordVisibilityToggle}
              />

              <ActionsRow>
                <Button
                  fullWidth
                  isLoading={submitting}
                  onClick={handleSubmit}
                  type="submit"
                >
                  {t('shared.continue')}
                </Button>
              </ActionsRow>
            </form>
          </Pane.Section>
        </Pane>

        <AdditionalInfo>
          <LoginBlock>
            <LoginBlockText>{t('passwordForm.loginText')}</LoginBlockText>

            <Button theme="primaryOutline" to="/login" wide>
              {t('passwordForm.loginButton')}
            </Button>
          </LoginBlock>
        </AdditionalInfo>
      </Fragment>
    );
  }
}

export default PasswordForm;
