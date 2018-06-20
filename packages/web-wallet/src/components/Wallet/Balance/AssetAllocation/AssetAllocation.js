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
    asset: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    gradient: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    balance: 0,
  };

  getFormattedBalance = value => parseFloat(parseFloat(value).toFixed(2));

  getFormattedAsset = () => (this.props.asset === 'native' ? 'XLM' : 'MOBI');

  renderCaption = () => {
    const { asset } = this.props;

    return asset === 'native'
      ? 'Each DApp you use puts a hold on 3 XLM until you close out the DApp balance.'
      : 'Use your MOBI to make purchases within DApps.';
  };

  render() {
    const {
      asset, balance, appsBalance, gradient,
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
              Allocated to DApps
            </AllocatedBalance>
          </Header>
          <Content>
            <Caption>{this.renderCaption()}</Caption>
            <ButtonContainer>
              <Button to={`/wallet/add/${asset}`} theme="secondary" wide>
                <ButtonIcon>
                  <FontAwesomeIcon icon={faPlus} />
                </ButtonIcon>
                <span>Deposit {this.getFormattedAsset()}</span>
              </Button>
            </ButtonContainer>
          </Content>
        </Container>
      </Pane>
    );
  }
}

export default AssetAllocation;
