import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';

import { AmountInput, Caption } from './styles';

class AppDepositForm extends Component {
  static propTypes = {
    invalid: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    depositApp: PropTypes.object.isRequired,
  };

  render() {
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
          type="submit"
          theme="secondary"
          isLoading={loading}
          disabled={invalid || loading}
        >
          Submit Deposit
        </Button>
      </form>
    );
  }
}

export default AppDepositForm;
