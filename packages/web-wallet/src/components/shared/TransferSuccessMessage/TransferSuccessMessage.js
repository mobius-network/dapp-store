import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

class TransferSuccessMessage extends Component {
  static propTypes = {
    assetName: string.isRequired,
    assetValue: string.isRequired,
    linkPath: string.isRequired,
    linkLabel: string,
  };

  static defaultProps = {
    linkLabel: 'Continue',
  };

  render() {
    const {
      assetName, assetValue, linkPath, linkLabel,
    } = this.props;

    return (
      <Container>
        <Title>
          {assetValue} {assetName}
        </Title>
        <p>Transferred successfully!</p>
        <Link to={linkPath}>{linkLabel}</Link>
      </Container>
    );
  }
}

export default TransferSuccessMessage;
