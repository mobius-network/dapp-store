import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';
import {
  Container,
  Caption,
  Header,
  HeaderBalanceContainer,
  HeaderBalance,
  HeaderBalanceAmount,
  HeaderBalanceAsset,
  AllocatedBalance,
  Content,
  ButtonContainer,
  ButtonIcon,
} from './styles';

class AssetAllocation extends Component {
  static propTypes = {
    appsBalance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    asset: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    gradient: PropTypes.oneOf(['left', 'right']),
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balance: 0,
  };

  getFormattedBalance = value => parseFloat(parseFloat(value).toFixed(2));

  getFormattedAsset = () => (this.props.asset === 'native' ? 'XLM' : 'MOBI');

  renderCaption = () => {
    const { asset, t } = this.props;

    return asset === 'native'
      ? t('assetAllocation.captionNative')
      : t('assetAllocation.captionMobi');
  };

  render() {
    const {
      asset, balance, appsBalance, gradient, t,
    } = this.props;

    return (
      <Pane>
        <Container>
          <Header gradient={gradient}>
            <HeaderBalance>
              <HeaderBalanceContainer>
                <HeaderBalanceAmount>
                  {this.getFormattedBalance(balance)}
                </HeaderBalanceAmount>
                <HeaderBalanceAsset>
                  {this.getFormattedAsset()}
                </HeaderBalanceAsset>
              </HeaderBalanceContainer>
            </HeaderBalance>
            <AllocatedBalance>
              <b>
                {appsBalance ? `+ ${this.getFormattedBalance(appsBalance)}` : 0}{' '}
                {this.getFormattedAsset()}
              </b>{' '}
              {t('assetAllocation.allocatedBalance')}
            </AllocatedBalance>
          </Header>
          <Content>
            <Caption>{this.renderCaption()}</Caption>
            <ButtonContainer>
              <Button theme="secondary" to={`/wallet/add/${asset}`} wide>
                <ButtonIcon>
                  <FontAwesomeIcon icon={faPlus} />
                </ButtonIcon>
                <span>
                  {t('assetAllocation.deposit')} {this.getFormattedAsset()}
                </span>
              </Button>
            </ButtonContainer>
          </Content>
        </Container>
      </Pane>
    );
  }
}

export default AssetAllocation;
