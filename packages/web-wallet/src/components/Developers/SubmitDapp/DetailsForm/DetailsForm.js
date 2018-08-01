import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import ConfirmationModal from 'components/shared/ConfirmationModal';
import DappForm from 'components/shared/DappForm';

class DetailsForm extends Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
    isUserAccountMerging: PropTypes.bool,
    mergeUserAccount: PropTypes.func.isRequired,
    submitDapp: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isUserAccountMerging: false,
    isSubmitting: false,
  };

  state = {
    cancelConfirmationVisible: false,
  };

  toggleCancelConfirmation = () =>
    this.setState({
      cancelConfirmationVisible: !this.state.cancelConfirmationVisible,
    });

  render() {
    const {
      isSubmitting,
      isUserAccountMerging,
      mergeUserAccount,
      submitDapp,
      t,
    } = this.props;
    const { cancelConfirmationVisible } = this.state;

    return (
      <Fragment>
        <Pane theme="narrow">
          <Pane.Header title={t('submitDapp.detailsForm.title')} />
          <DappForm
            isBusy={isSubmitting}
            onCancel={this.toggleCancelConfirmation}
            onSubmit={submitDapp}
          />
        </Pane>

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
