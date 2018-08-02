import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import ConfirmationModal from 'components/shared/ConfirmationModal';
import DappForm from 'components/shared/DappForm';
import { submitSteps } from 'state/submitDapp';

class DetailsForm extends Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
    setSubmitStep: PropTypes.func.isRequired,
    submitDapp: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    userAccount: PropTypes.object.isRequired,
    userAccountBalance: PropTypes.number,
    userAccountNumber: PropTypes.number.isRequired,
  };

  static defaultProps = {
    isSubmitting: false,
    userAccountBalance: 0,
  };

  state = {
    cancelConfirmationVisible: false,
  };

  toggleCancelConfirmation = () =>
    this.setState({
      cancelConfirmationVisible: !this.state.cancelConfirmationVisible,
    });

  handleSubmit = formValues => {
    const {
      setSubmitStep,
      submitDapp,
      userAccount,
      userAccountBalance,
      userAccountNumber,
    } = this.props;

    submitDapp({
      formValues,
      userAccount,
      userAccountNumber,
      userAccountBalance,
      callbackAction: () => setSubmitStep(submitSteps.completed),
    });
  };

  render() {
    const { isSubmitting, reset, t } = this.props;
    const { cancelConfirmationVisible } = this.state;

    return (
      <Fragment>
        <Pane theme="narrow">
          <Pane.Header title={t('submitDapp.detailsForm.title')} />
          <DappForm
            isBusy={isSubmitting}
            onCancel={this.toggleCancelConfirmation}
            onSubmit={this.handleSubmit}
          />
        </Pane>

        <ConfirmationModal
          isOpen={cancelConfirmationVisible}
          onCancel={this.toggleCancelConfirmation}
          onConfirm={reset}
          title={t('submitDapp.detailsForm.cancelConfirmationTitle')}
        >
          {t('submitDapp.detailsForm.cancelConfirmationText')}
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default DetailsForm;
