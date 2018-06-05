import React from 'react';
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

const Signup = ({ signupStep }) => {
  const StepComponent = signupComponents[signupStep];

  return <StepComponent />;
};

Signup.propTypes = {
  signupStep: PropTypes.isRequired,
};

export default Signup;
