import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    mobiBalance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    releaseAppBalance: PropTypes.shape({
      loading: PropTypes.bool,
      mutate: PropTypes.func,
    }),
    t: PropTypes.func.isRequired,
    xlmBalance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
      <Container px={0} width={[1, 1 / 3]}>
        <AppPic url={app.image_url} />
        <AppName>{app.name}</AppName>
        <AppBalance>
          <AppBalanceItem>{mobiBalance} MOBI</AppBalanceItem>
          <AppBalanceItem>{xlmBalance} XLM</AppBalanceItem>
        </AppBalance>
        <ButtonContainer>
          <ReleaseButton isLoading={loading} onClick={mutate} theme="secondary">
            {t('appAllocation.releaseButton')}
          </ReleaseButton>
        </ButtonContainer>
      </Container>
    );
  }
}

export default AppAllocation;
