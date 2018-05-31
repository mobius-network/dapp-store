import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, getSignupStep } from 'state/auth';

import Login from './Login';

const mapStateToProps = createStructuredSelector({
  signupStep: getSignupStep,
});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(Login);
