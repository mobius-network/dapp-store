import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
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
      </div>
    );
  }
}

export default Signup;
