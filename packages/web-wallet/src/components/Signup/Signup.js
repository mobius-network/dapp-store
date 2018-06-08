import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { signupSteps } from 'state/auth';

import PasswordForm from './PasswordForm';
import DownloadKeypair from './DownloadKeypair';
import Mnemonic from './Mnemonic';

const signupComponents = {
  [signupSteps.password]: PasswordForm,
  [signupSteps.download]: DownloadKeypair,
  [signupSteps.mnemonic]: Mnemonic,
};

export default class Signup extends Component {
  static propTypes = {
    signupStep: PropTypes.string.isRequired,
  };

  render() {
    const { signupStep } = this.props;
    const StepComponent = signupComponents[signupStep];

    return <StepComponent />;
  }
}
