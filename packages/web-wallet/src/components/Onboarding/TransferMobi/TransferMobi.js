import React, { Component } from 'react';
// import { string } from 'prop-types';
import PurchaseMobi from 'components/shared/PurchaseMobi';
import TransferSuccessMessage from 'components/shared/TransferSuccessMessage';

import { Container, Title } from './styles';

class TransferMobi extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  state = {
    mobiPurchased: false,
  };

  handlePurchase = ({ value }) => {
    this.setState({ mobiPurchased: value });
  };

  render() {
    const { mobiPurchased } = this.state;

    return (
      <Container>
        <Title>Add MOBI</Title>

        {mobiPurchased ? (
          <TransferSuccessMessage
            assetName="mobi"
            assetValue={mobiPurchased}
            linkPath="/"
            linkLabel="Browse DApp store"
          />
        ) : (
          <PurchaseMobi onSuccess={this.handlePurchase} />
        )}
      </Container>
    );
  }
}

export default TransferMobi;
