import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { submitSteps } from 'state/submitDapp';
import Account from './Account';
import Form from './Form';

const submitDappComponents = {
  [submitSteps.account]: Account,
  [submitSteps.form]: Form,
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
