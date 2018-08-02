import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/shared/Spinner';
import { editSteps } from 'state/editDapp';
import { SpinnerContainer } from './styles';
import Completed from './Completed';
import DetailsForm from './DetailsForm';

const editDappComponents = {
  [editSteps.completed]: Completed,
  [editSteps.detailsForm]: DetailsForm,
};

class EditDapp extends Component {
  static propTypes = {
    editStep: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    isStoreAccountLoaded: PropTypes.bool,
    loadStoreAccount: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    isStoreAccountLoaded: false,
  };

  componentDidMount() {
    this.props.loadStoreAccount();
  }

  render() {
    const {
      editStep, history, isStoreAccountLoaded, match,
    } = this.props;
    const StepComponent = editDappComponents[editStep];

    if (isStoreAccountLoaded) {
      return <StepComponent match={match} history={history} />;
    }

    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }
}

export default EditDapp;
