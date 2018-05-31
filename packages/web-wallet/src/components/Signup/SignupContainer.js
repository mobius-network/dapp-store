import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, getSignupStep } from 'state/auth';

import Signup from './Signup';

const mapStateToProps = createStructuredSelector({
  signupStep: getSignupStep,
});

export default connect(mapStateToProps, authActions)(Signup);
