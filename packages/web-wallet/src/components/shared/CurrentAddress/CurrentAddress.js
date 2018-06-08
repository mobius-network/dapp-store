import React, { Component } from 'react';
import { string } from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';

import CopyField from 'components/shared/CopyField';
import { Container, Info, InfoText, InfoIcon } from './styles';

class CurrentAddress extends Component {
  static propTypes = {
    publicKey: string.isRequired,
  };

  render() {
    const { publicKey } = this.props;

    return (
      <Container>
        <CopyField text={publicKey} />
        <Info>
          <InfoIcon>
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </InfoIcon>
          <InfoText>Waiting for transfer…</InfoText>
        </Info>
      </Container>
    );
  }
}

export default CurrentAddress;
