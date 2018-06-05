import React, { Component } from 'react';
import { string } from 'prop-types';
import { signupSteps } from 'state/auth';

import PasswordForm from './PasswordForm';
import DownloadKeypair from './DownloadKeypair';
import Mnemonic from './Mnemonic';

const signupComponents = {
  [signupSteps.password]: PasswordForm,
  [signupSteps.download]: DownloadKeypair,
  [signupSteps.mnemonic]: Mnemonic,
};

class Signup extends Component {
  static propTypes = {
    signupStep: string.isRequired,
  };

  // TODO: added for testing purposes, delete me
  componentDidMount() {
    this.props.setSignupStep('password');
  }

  render() {
    const { signupStep } = this.props;
    const StepComponent = signupComponents[signupStep];

    return (
      <div>
        <div>Signup</div>

        <StepComponent />
      </div>
    );
  }
}

export default Signup;
