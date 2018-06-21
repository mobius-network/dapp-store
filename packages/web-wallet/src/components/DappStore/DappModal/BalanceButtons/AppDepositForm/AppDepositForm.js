import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import ConfirmationModal from 'components/shared/ConfirmationModal';

import { AmountInput, Caption } from './styles';

class AppDepositForm extends Component {
  static propTypes = {
    invalid: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    depositApp: PropTypes.object.isRequired,
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
      invalid,
      handleSubmit,
      depositApp: { loading },
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          component={AmountInput}
          autofocus
          type="number"
          label="Amount"
          name="amount"
          placeholder="0.0"
          innerLabel="MOBI"
        />
        <Caption>Only put in as much as you’re willing to spend.</Caption>
        <Button
          fullWidth
          theme="secondary"
          disabled={invalid || loading}
          onClick={this.showConfirmation}
        >
          Submit Deposit
        </Button>

        <ConfirmationModal
          title="Are you sure you want to deposit this much?"
          submitting={loading}
          onConfirm={handleSubmit}
          isOpen={confirmationShown}
        >
          {
            'The developer can take these coins at any point in time. We recommend depositing in smaller increments of '
          }
          <b>10</b> or <b>100</b>, depending on how much you need to play.
        </ConfirmationModal>
      </form>
    );
  }
}

export default AppDepositForm;
