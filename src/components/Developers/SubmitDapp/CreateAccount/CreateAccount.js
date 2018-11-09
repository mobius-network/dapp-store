import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

class CreateAccount extends Component {
  static propTypes = {
    createUserAccount: PropTypes.func.isRequired,
    isUserAccountCreating: PropTypes.bool,
    isUserAccountLoading: PropTypes.bool,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isUserAccountCreating: false,
    isUserAccountLoading: false,
  };

  render() {
    const {
      createUserAccount,
      isUserAccountCreating,
      isUserAccountLoading,
      t,
    } = this.props;
    const isBusy = isUserAccountCreating || isUserAccountLoading;

    return (
      <Pane theme="narrow">
        <Pane.Header title={t('submitDapp.createAccount.title')} />
        <Pane.Section>
          <p>{t('submitDapp.createAccount.explanation')}</p>
        </Pane.Section>
        <Pane.Footer>
          <Button
            disabled={isBusy}
            isLoading={isBusy}
            onClick={createUserAccount}
            wide
          >
            {t('shared.continue')}
          </Button>
        </Pane.Footer>
      </Pane>
    );
  }
}

export default CreateAccount;
