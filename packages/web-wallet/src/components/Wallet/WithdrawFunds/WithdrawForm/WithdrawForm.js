import React, { Component } from 'react';
import { Operation } from 'stellar-sdk';
import { string } from 'prop-types';
import { assets } from '@mobius-network/core';
import { SubmissionError } from 'redux-form';

import Grid from 'components/shared/Grid';
import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

import { FormFields, AvailableBalance, FormActions } from './styles';

class WithdrawForm extends Component {
  static propTypes = {
    asset: string.isRequired,
  };

  getAssetName = () => (this.props.asset === 'native' ? 'XLM' : 'MOBI');

  submitPayment = async ({ destination, amount }) => {
    const { asset, withdrawAsset } = this.props;

    const paymentOp = Operation.payment({
      destination,
      amount,
      asset: assets[asset],
    });

    const { error } = await withdrawAsset.mutate({
      operation: paymentOp,
    });

    if (error) {
      throw new SubmissionError({ amount: error.message });
    }
  };

  render() {
    const {
      balance,
      handleSubmit,
      withdrawAsset: { loading },
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitPayment)}>
        <FormFields>
          <Grid>
            <Grid.Row>
              <Grid.Col width={1 / 2}>
                <FormRow
                  caption={`Enter the amount of ${this.getAssetName()} to transfer`}
                  component={TextInput}
                  label="Amount"
                  name="amount"
                  placeholder="amount"
                />
                <AvailableBalance>
                  Available balance: {balance} {this.getAssetName()}
                </AvailableBalance>
              </Grid.Col>
              <Grid.Col width={1 / 2}>
                <FormRow
                  caption="Enter the address of the external wallet"
                  component={TextInput}
                  label="Wallet Address"
                  name="destination"
                  placeholder="destination"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </FormFields>
        <FormActions>
          <Button disabled={loading} isLoading={loading} type="submit" wide>
            Submit transfer
          </Button>
        </FormActions>
      </form>
    );
  }
}

export default WithdrawForm;
