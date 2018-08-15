import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import DappForm from 'components/shared/DappForm';
import Pane from 'components/shared/Pane';
import Spinner from 'components/shared/Spinner';
import { editSteps } from 'state/editDapp';
import { SpinnerContainer, KeyContainer, KeyRevealButton } from './styles';

class DetailsForm extends Component {
  static propTypes = {
    editDapp: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    isLoaded: PropTypes.bool,
    isSubmitting: PropTypes.bool,
    loadUserAccountWithDapp: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    submitDapp: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    userDappDetails: PropTypes.object,
  };

  static defaultProps = {
    isLoaded: false,
    isSubmitting: false,
  };

  state = {
    isSecretKeyVisible: false,
  };

  componentDidMount() {
    const {
      loadUserAccountWithDapp,
      match: {
        params: { id },
      },
      userAccountKeypair,
    } = this.props;

    loadUserAccountWithDapp({
      accountNumber: id,
      publicKey: userAccountKeypair.publicKey(),
    });
  }

  toggleSecretKey = () => this.setState({ isSecretKeyVisible: !this.state.isSecretKeyVisible });

  handleCancel = () => this.props.history.push('/developers/my');

  handleSubmit = formValues => {
    const {
      editDapp,
      match,
      setEditStep,
      submitDapp,
      userAccount,
      userAccountBalance,
      userDappDetails,
    } = this.props;

    if (isEmpty(userDappDetails)) {
      submitDapp({
        formValues,
        userAccount,
        userAccountNumber: match.params.id,
        userAccountBalance,
        callbackAction: () => setEditStep(editSteps.completed),
      });

      return;
    }

    editDapp({
      formValues,
      userAccount,
      userAccountNumber: match.params.id,
      callbackAction: () => setEditStep(editSteps.completed),
    });
  };

  render() {
    const {
      isLoaded,
      isSubmitting,
      t,
      userDappDetails,
      userAccountKeypair,
    } = this.props;

    const { isSecretKeyVisible } = this.state;

    if (isLoaded) {
      return (
        <Fragment>
          <KeyContainer label={t('editDapp.detailsForm.publicKey')}>
            {userAccountKeypair.publicKey()}
          </KeyContainer>
          <KeyContainer label={t('editDapp.detailsForm.secretKey')}>
            {isSecretKeyVisible ? (
              userAccountKeypair.secret()
            ) : (
              <KeyRevealButton
                type="button"
                variant="text"
                onClick={this.toggleSecretKey}
              >
                {t('editDapp.detailsForm.revealButton')}
              </KeyRevealButton>
            )}
          </KeyContainer>

          <Pane theme="narrow">
            <Pane.Header
              title={
                isEmpty(userDappDetails)
                  ? t('editDapp.detailsForm.titleNew')
                  : t('editDapp.detailsForm.title')
              }
            />
            <DappForm
              initialValues={userDappDetails}
              isBusy={isSubmitting}
              onCancel={this.handleCancel}
              onSubmit={this.handleSubmit}
            />
          </Pane>
        </Fragment>
      );
    }

    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }
}

export default DetailsForm;
