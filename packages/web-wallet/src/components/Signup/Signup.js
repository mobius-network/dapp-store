import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

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

  // TODO: delete me
  componentDidMount() {
    this.props.setSignupStep('password');
  }

  render() {
    const { signupStep } = this.props;
    const StepComponent = signupComponents[signupStep];

    return (
      <div>
        <div>Signup</div>
        <div>step: {signupStep}</div>
        <Link to="/">Home</Link>

        <StepComponent />
      </div>
    );
  }
}

export default Signup;
