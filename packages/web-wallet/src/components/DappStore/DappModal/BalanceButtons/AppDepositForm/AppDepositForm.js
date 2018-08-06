import React, { Component, Fragment } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import ConfirmationModal from 'components/shared/ConfirmationModal';

import { AmountInput, Caption } from './styles';

class AppDepositForm extends Component {
  static propTypes = {
    depositApp: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
  };

  state = {
    confirmationShown: false,
  };

  showConfirmation = () => {
    this.setState({ confirmationShown: true });
  };

  hideConfirmation = () => {
    this.setState({ confirmationShown: false });
  };

  render() {
    const { confirmationShown } = this.state;

    const {
      amount,
      invalid,
      handleSubmit,
      depositApp: { loading },
      t,
    } = this.props;

    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <Field
            component={AmountInput}
            autofocus
            type="number"
            label={t('appDepositForm.amountLabel')}
            name="amount"
            placeholder="0.0"
            innerLabel="MOBI"
          />
          <Caption>{t('appDepositForm.caption')}</Caption>
          <Button
            disabled={invalid}
            fullWidth
            isLoading={amount < 100 && loading}
            onClick={amount > 100 ? this.showConfirmation : handleSubmit}
            type="submit"
            variant="secondary"
          >
            {t('appDepositForm.submitButton')}
          </Button>
        </form>

        <ConfirmationModal
          isConfirming={loading}
          isOpen={confirmationShown}
          onCancel={this.hideConfirmation}
          onConfirm={handleSubmit}
          title={t('appDepositForm.confirmationTitle')}
        >
          {t('appDepositForm.confirmationText')}
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default AppDepositForm;
