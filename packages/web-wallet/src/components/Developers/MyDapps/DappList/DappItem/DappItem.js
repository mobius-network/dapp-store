import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import Badge from 'components/shared/Badge';
import ConfirmationModal from 'components/shared/ConfirmationModal';
import {
  AccountBalance,
  AccountDetails,
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
    isUserAccountMerging: PropTypes.bool,
    loadUserAccountWithDapp: PropTypes.func.isRequired,
    mergeUserAccount: PropTypes.func.isRequired,
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

  state = {
    deleteConfirmationVisible: false,
  };

  componentDidMount() {
    this.loadUserAccountWithDapp();
  }

  loadUserAccountWithDapp = () => {
    const {
      accountNumber,
      loadUserAccountWithDapp,
      userAccountKeypair,
    } = this.props;

    return loadUserAccountWithDapp({
      accountNumber,
      publicKey: userAccountKeypair.publicKey(),
    });
  };

  toggleDeleteConfirmation = () =>
    this.setState({
      deleteConfirmationVisible: !this.state.deleteConfirmationVisible,
    });

  handleDeleteConfirmation = () => {
    const {
      mergeUserAccount,
      userAccount,
      userAccountBalance,
      accountNumber,
    } = this.props;

    mergeUserAccount({
      callbackAction: this.loadUserAccountWithDapp,
      userAccount,
      userAccountBalance,
      userAccountNumber: accountNumber,
    });
  };

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
      isUserAccountMerging,
      t,
      userAccount,
      userAccountBalance,
      userDappDetails,
    } = this.props;
    const { deleteConfirmationVisible } = this.state;
    const isDraft = isEmpty(userDappDetails);

    if (!isLoaded || isEmpty(userAccount)) {
      return null;
    }

    return (
      <Fragment>
        <Container>
          <DappPic url={userDappDetails.image_url} theme="small" />
          <DappDetails>
            {userDappDetails.name ? (
              <DappName>
                <span>{userDappDetails.name}</span>
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

              {isDraft && (
                <DappAction onClick={this.toggleDeleteConfirmation}>
                  {t('myDapps.dappItem.deleteButton')}
                </DappAction>
              )}
            </DappActions>
          </DappDetails>

          {isDraft ? (
            <Badge>{t('myDapps.dappItem.draft')}</Badge>
          ) : (
            <AccountDetails>
              <AccountBalance>{userAccountBalance} MOBI</AccountBalance>
            </AccountDetails>
          )}
        </Container>

        <ConfirmationModal
          isConfirming={isUserAccountMerging}
          isOpen={deleteConfirmationVisible}
          onCancel={this.toggleDeleteConfirmation}
          onConfirm={this.handleDeleteConfirmation}
          title={t('myDapps.dappItem.deleteConfirmationTitle')}
        >
          {t('myDapps.dappItem.deleteConfirmationText')}
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default DappItem;
