import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, AssetName, AssetValue, Message,
} from './styles';

class TransferSuccessMessage extends Component {
  static propTypes = {
    assetName: PropTypes.string.isRequired,
    assetValue: PropTypes.number.isRequired,
    className: PropTypes.string,
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'Transferred successfully!',
  };

  render() {
    const {
      assetName, assetValue, className, message,
    } = this.props;

    return (
      <Container className={className}>
        <AssetValue>{parseFloat(parseFloat(assetValue).toFixed(2))}</AssetValue>
        <AssetName>{assetName}</AssetName>
        <Message>{message}</Message>
      </Container>
    );
  }
}

export default TransferSuccessMessage;
