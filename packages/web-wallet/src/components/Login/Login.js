import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Pane from 'components/shared/Pane';
import AdditionalInfo from 'components/shared/AdditionalInfo';
import Button from 'components/shared/Button';

import { LoginForm, SignupBlock, SignupBlockText } from './styles';

class Login extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <Pane theme="wide" withGradient>
          <Pane.Header title={t('login.title')} caption={t('login.caption')} />

          <Pane.Section>
            <LoginForm />
          </Pane.Section>
        </Pane>

        <AdditionalInfo>
          <SignupBlock>
            <SignupBlockText>{t('login.signupText')}</SignupBlockText>

            <Button to="/signup" theme="primaryOutline" wide>
              {t('login.signupButton')}
            </Button>
          </SignupBlock>
        </AdditionalInfo>
      </Fragment>
    );
  }
}

export default translate()(Login);
