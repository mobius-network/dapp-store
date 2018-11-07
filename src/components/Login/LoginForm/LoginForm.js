import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormRow from 'components/shared/FormRow';
import PasswordInput from 'components/shared/PasswordInput';
import FileInput from 'components/shared/FileInput';
import Button from 'components/shared/Button';
import { ActionsRow } from './styles';

class LoginForm extends Component {
  static propTypes = {
    change: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  onKeyUpload = (event, [keyfile] = []) => {
    if (!keyfile) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.props.change('keyfile', reader.result);
    };

    reader.readAsText(keyfile);
  };

  render() {
    const { handleSubmit, t } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <FormRow
          component={PasswordInput}
          name="password"
          placeholder={t('loginForm.passwordField')}
        />

        <FormRow
          component={FileInput}
          name="keyfile"
          onChange={this.onKeyUpload}
          placeholder={t('loginForm.keyfileField')}
        />

        <ActionsRow>
          <Button fullWidth onClick={handleSubmit} type="submit">
            {t('loginForm.submitButton')}
          </Button>
        </ActionsRow>
      </form>
    );
  }
}

export default LoginForm;
