import React, { Component } from 'react';
import { Operation } from 'stellar-sdk';
import PropTypes from 'prop-types';
import { translate, Trans } from 'react-i18next';
import { assets } from '@mobius-network/core';
import { SubmissionError } from 'redux-form';

import Grid from 'components/shared/Grid';
import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

import { FormFields, AvailableBalance, FormActions } from './styles';

class WithdrawForm extends Component {
  static propTypes = {
    asset: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
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
      t,
      withdrawAsset: { loading },
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitPayment)}>
        <FormFields>
          <Grid>
            <Grid.Row>
              <Grid.Col width={1 / 2}>
                <FormRow
                  caption={
                    <Trans i18nKey="withdrawForm.amountFieldCaption">
                      {this.getAssetName()}
                    </Trans>
                  }
                  component={TextInput}
                  label={t('withdrawForm.amountFieldLabel')}
                  name="amount"
                />
                <AvailableBalance>
                  Available balance: {balance} {this.getAssetName()}
                </AvailableBalance>
              </Grid.Col>
              <Grid.Col width={1 / 2}>
                <FormRow
                  caption={t('withdrawForm.destinationFieldCaption')}
                  component={TextInput}
                  label={t('withdrawForm.destinationFieldLabel')}
                  name="destination"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </FormFields>
        <FormActions>
          <Button disabled={loading} isLoading={loading} type="submit" wide>
            {t('withdrawForm.submitButton')}
          </Button>
        </FormActions>
      </form>
    );
  }
}

export default translate()(WithdrawForm);
