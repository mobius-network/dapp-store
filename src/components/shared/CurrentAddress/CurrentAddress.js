import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';

import CopyField from 'components/shared/CopyField';
import {
  Container, Info, InfoText, InfoIcon,
} from './styles';

class CurrentAddress extends Component {
  static propTypes = {
    publicKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { publicKey, t } = this.props;

    return (
      <Container>
        <CopyField text={publicKey} />
        <Info>
          <InfoIcon>
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </InfoIcon>
          <InfoText>{t('currentAddress.statusText')}</InfoText>
        </Info>
      </Container>
    );
  }
}

export default CurrentAddress;
