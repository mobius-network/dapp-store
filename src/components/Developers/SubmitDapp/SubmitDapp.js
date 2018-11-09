import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { submitSteps } from 'state/submitDapp';
import Completed from './Completed';
import CreateAccount from './CreateAccount';
import DetailsForm from './DetailsForm';
import Setup from './Setup';

const submitDappComponents = {
  [submitSteps.completed]: Completed,
  [submitSteps.createAccount]: CreateAccount,
  [submitSteps.detailsForm]: DetailsForm,
  [submitSteps.setup]: Setup,
};

class SubmitDapp extends Component {
  static propTypes = {
    submitStep: PropTypes.string.isRequired,
  };

  render() {
    const { submitStep } = this.props;
    const StepComponent = submitDappComponents[submitStep];

    return <StepComponent />;
  }
}

export default SubmitDapp;
