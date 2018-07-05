import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import {
  Container,
  ButtonContainer,
  AppPic,
  AppName,
  AppBalance,
  AppBalanceItem,
  ReleaseButton,
} from './styles';

class AppAllocation extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const {
      app, mobiBalance, t, xlmBalance,
    } = this.props;
    const { loading, mutate } = this.props.releaseAppBalance;

    if (!xlmBalance && !mobiBalance) {
      return null;
    }

    return (
      <Container width={[1, 1 / 3]} px={0}>
        <AppPic url={app.image_url} />
        <AppName>{app.name}</AppName>
        <AppBalance>
          <AppBalanceItem>{mobiBalance} MOBI</AppBalanceItem>
          <AppBalanceItem>{xlmBalance} XLM</AppBalanceItem>
        </AppBalance>
        <ButtonContainer>
          <ReleaseButton theme="secondary" onClick={mutate} isLoading={loading}>
            {t('appAllocation.releaseButton')}
          </ReleaseButton>
        </ButtonContainer>
      </Container>
    );
  }
}

export default translate()(AppAllocation);
