import React, { Component } from 'react';
import { Operation } from 'stellar-sdk';
import { string } from 'prop-types';
import { promisifyAction } from 'redux-yo';
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

  state = {
    processing: false,
  };

  getAssetName = () => (this.props.asset === 'native' ? 'XLM' : 'MOBI');

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
    const { balance, handleSubmit } = this.props;

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
          <Button disabled={processing} type="submit">
            Submit transfer
          </Button>
        </FormActions>
      </form>
    );
  }
}

export default WithdrawForm;
