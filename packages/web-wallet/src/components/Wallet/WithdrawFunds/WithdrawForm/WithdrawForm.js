import React, { Component } from 'react';
import { Operation } from 'stellar-sdk';
import { string } from 'prop-types';
import { promisifyAction } from 'redux-yo';
import { assets } from '@mobius-network/core';
import { SubmissionError } from 'redux-form';

import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

// import { Container, Title } from './styles';

class WithdrawForm extends Component {
  static propTypes = {
    asset: string.isRequired,
  };

  state = {
    processing: false,
  };

  submitPayment = async ({ destination, amount }) => {
    const { asset, transact } = this.props;

    const assetObject = assets[asset];

    const paymentOp = Operation.payment({
      destination,
      amount,
      asset: assetObject,
    });

    this.setState({ processing: true });

    try {
      await promisifyAction(transact, {
        name: `${asset}Withdraw`,
        operation: paymentOp,
      });
    } catch (error) {
      throw new SubmissionError(error);
    }

    this.setState({ processing: false });
  };

  render() {
    const { processing } = this.state;
    const { asset, balance, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitPayment)}>
        <FormRow component={TextInput} name="amount" placeholder="amount" />

        <p>Asset: {asset}</p>
        <p>Balance: {balance}</p>

        <FormRow
          component={TextInput}
          name="destination"
          placeholder="destination"
        />

        {processing && 'processing'}

        <Button type="submit">Submit transfer</Button>
      </form>
    );
  }
}

export default WithdrawForm;
