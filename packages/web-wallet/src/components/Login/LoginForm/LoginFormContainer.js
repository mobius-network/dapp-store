import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { promisifyAction } from 'redux-yo';
import { createStructuredSelector } from 'reselect';

import { authActions, getSignupStep } from 'state/auth';

import LoginForm from './LoginForm';
import { validate } from './validations';

const mapStateToProps = createStructuredSelector({
  signupStep: getSignupStep,
});

const actions = {
  ...authActions,
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'loginForm',
    validate,
    onSubmit: (values, store, { loginStart }) =>
      promisifyAction(loginStart, values),
  })
)(LoginForm);
