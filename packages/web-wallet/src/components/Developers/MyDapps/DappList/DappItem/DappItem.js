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
    dappStatus: PropTypes.string,
    isLoaded: PropTypes.bool,
    loadUserAccountWithDapp: PropTypes.func.isRequired,
    userAccount: PropTypes.object,
    userAccountBalance: PropTypes.number,
    userAccountKeypair: PropTypes.object,
    userDappDetails: PropTypes.object,
  };

  static defaultProps = {
    isLoaded: false,
    userAccountBalance: 0,
    userDappDetails: {},
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
      isLoaded,
      t,
      userAccountBalance,
      userDappDetails,
    } = this.props;
    const isDraft = isEmpty(userDappDetails);

    if (!isLoaded) {
      return null;
    }

    return (
      <Container>
        <DappPic url={userDappDetails.image_url} theme="small" />
        <DappDetails>
          {userDappDetails.name ? (
            <DappName>
              {userDappDetails.name}
              {this.renderStatusBadge()}
            </DappName>
          ) : (
            <DappNamePlaceholder>
              {t('myDapps.dappItem.namePlaceholder')} #{accountNumber}
            </DappNamePlaceholder>
          )}

          <DappActions>
            <DappAction to={`/developers/my/${accountNumber}/edit`}>
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
}

export default DappItem;
