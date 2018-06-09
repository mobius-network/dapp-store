import React, { Component } from 'react';
import { object } from 'prop-types';

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
    app: object.isRequired,
  };

  onRelaseBalance = () => {
    const { app, releaseBalance } = this.props;

    releaseBalance(app);
  };

  render() {
    const { app, mobiBalance, xlmBalance } = this.props;

    if (!xlmBalance && !mobiBalance) {
      return null;
    }

    return (
      <Container>
        <AppPic url={app.image_url} />
        <AppName>{app.name}</AppName>
        <AppBalance>
          <AppBalanceItem>{mobiBalance} MOBI</AppBalanceItem>
          <AppBalanceItem>{xlmBalance} XLM</AppBalanceItem>
        </AppBalance>
        <ButtonContainer>
          <ReleaseButton onClick={this.onRelaseBalance} theme="secondary">
            Release balance
          </ReleaseButton>
        </ButtonContainer>
      </Container>
    );
  }
}

export default AppAllocation;
