import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import Spinner from 'components/shared/Spinner';
import Pane from 'components/shared/Pane';
import DappForm from 'components/shared/DappForm';
import { editSteps } from 'state/editDapp';
import { SpinnerContainer } from './styles';

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
      isLoaded, isSubmitting, t, userDappDetails,
    } = this.props;

    if (isLoaded) {
      return (
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
