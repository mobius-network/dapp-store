import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, signupStep } from 'state/auth';

import Signup from './Signup';

const mapStateToProps = createStructuredSelector({
  signupStep,
});

export default connect(mapStateToProps, authActions)(Signup);
