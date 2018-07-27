import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import Badge from 'components/shared/Badge';
import {
  AccountBalance,
  AccountDetails,
  AccountLink,
  Container,
  DappAction,
  DappActions,
  DappDetails,
  DappName,
  DappNamePlaceholder,
  DappPic,
} from './styles';

class DappItem extends Component {
  static propTypes = {
    accountNumber: PropTypes.number.isRequired,
    dappDetails: PropTypes.object,
    dappStatus: PropTypes.string,
    isLoaded: PropTypes.bool,
    loadUserAccountWithDapp: PropTypes.func.isRequired,
    userAccount: PropTypes.object,
    userAccountKeypair: PropTypes.object,
    userAccountBalance: PropTypes.number,
  };

  static defaultProps = {
    isLoaded: false,
    userAccountBalance: 0,
  };

  componentDidMount() {
    const {
      accountNumber,
      loadUserAccountWithDapp,
      userAccountKeypair,
    } = this.props;

    loadUserAccountWithDapp({
      accountNumber,
      publicKey: userAccountKeypair.publicKey(),
    });
  }

  renderStatusBadge = () => {
    const { dappStatus, t } = this.props;

    switch (dappStatus) {
      case 'success':
        return (
          <Badge theme="success">{t('myDapps.dappItem.status.success')}</Badge>
        );

      case 'revoked':
        return (
          <Badge theme="error">{t('myDapps.dappItem.status.revoked')}</Badge>
        );

      case 'pending':
        return <Badge>{t('myDapps.dappItem.status.pending')}</Badge>;

      default:
        return null;
    }
  };

  render() {
    const {
      accountNumber,
      dappDetails,
      isLoaded,
      t,
      userAccountBalance,
    } = this.props;
    const isDraft = isEmpty(dappDetails);

    if (isLoaded) {
      return (
        <Container>
          <DappPic src={dappDetails.image_url} theme="small" />
          <DappDetails>
            {dappDetails.name ? (
              <DappName>
                {dappDetails.name}
                {this.renderStatusBadge()}
              </DappName>
            ) : (
              <DappNamePlaceholder>
                {t('myDapps.dappItem.namePlaceholder')} #{accountNumber}
              </DappNamePlaceholder>
            )}

            <DappActions>
              <DappAction to="/">
                {isDraft
                  ? t('myDapps.dappItem.publishButton')
                  : t('myDapps.dappItem.editButton')}
              </DappAction>
            </DappActions>
          </DappDetails>

          {isDraft ? (
            <Badge>{t('myDapps.dappItem.draft')}</Badge>
          ) : (
            <AccountDetails>
              <AccountBalance>{userAccountBalance} MOBI</AccountBalance>
              <AccountLink to="/">
                {t('myDapps.dappItem.viewAccountButton')}
              </AccountLink>
            </AccountDetails>
          )}
        </Container>
      );
    }

    return null;
  }
}

export default DappItem;
