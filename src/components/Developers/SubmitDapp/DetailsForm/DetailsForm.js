import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import ConfirmationModal from 'components/shared/ConfirmationModal';
import DappForm from 'components/shared/DappForm';

import AgreementModal from './AgreementModal';

class DetailsForm extends Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
    isUserAccountMerging: PropTypes.bool,
    mergeUserAccount: PropTypes.func.isRequired,
    submitDapp: PropTypes.func.isRequired,
    submitDappForm: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isUserAccountMerging: false,
    isSubmitting: false,
  };

  state = {
    agreementModalVisible: false,
    cancelConfirmationVisible: false,
  };

  toggleAgreementModal = () => {
    this.setState({
      agreementModalVisible: !this.state.agreementModalVisible,
    });
  };

  toggleCancelConfirmation = () => this.setState({
    cancelConfirmationVisible: !this.state.cancelConfirmationVisible,
  });

  render() {
    const {
      isSubmitting,
      isUserAccountMerging,
      mergeUserAccount,
      submitDapp,
      submitDappForm,
      t,
    } = this.props;
    const { agreementModalVisible, cancelConfirmationVisible } = this.state;

    return (
      <Fragment>
        <Pane theme="narrow">
          <Pane.Header title={t('submitDapp.detailsForm.title')} />
          <DappForm
            isBusy={isSubmitting}
            onBeforeSubmit={this.toggleAgreementModal}
            onCancel={this.toggleCancelConfirmation}
            onSubmit={submitDapp}
          />
        </Pane>

        <AgreementModal
          isConfirming={isSubmitting}
          isOpen={agreementModalVisible}
          onCancel={this.toggleAgreementModal}
          onSubmit={submitDappForm}
        />

        <ConfirmationModal
          isConfirming={isUserAccountMerging}
          isOpen={cancelConfirmationVisible}
          onCancel={this.toggleCancelConfirmation}
          onConfirm={mergeUserAccount}
          title={t('submitDapp.detailsForm.cancelConfirmationTitle')}
        >
          {t('submitDapp.detailsForm.cancelConfirmationText')}
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default DetailsForm;
