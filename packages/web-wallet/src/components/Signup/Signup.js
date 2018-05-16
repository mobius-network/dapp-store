import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import PasswordForm from './PasswordForm';

class Signup extends Component {
  static propTypes = {
    signupStep: string.isRequired,
  };

  toggleSignupStep = () => {
    const { setSignupStep, signupStep } = this.props;

    setSignupStep(signupStep === 'start' ? 'next' : 'start');
  };

  render() {
    const { signupStep } = this.props;

    return (
      <div>
        <div>Signup</div>
        <button onClick={this.toggleSignupStep}>Toggle</button>
        <div>step: {signupStep}</div>
        <Link to="/">Home</Link>
        <PasswordForm />
      </div>
    );
  }
}

export default Signup;
