import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

class Account extends Component {
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
        <Pane.Header title={t('submitDapp.account.title')} />
        <Pane.Section>
          <p>{t('submitDapp.account.explanation')}</p>
        </Pane.Section>
        <Pane.Section>
          <Button
            disabled={isBusy}
            isLoading={isBusy}
            onClick={createUserAccount}
            wide
          >
            {t('shared.continue')}
          </Button>
        </Pane.Section>
      </Pane>
    );
  }
}

export default Account;
