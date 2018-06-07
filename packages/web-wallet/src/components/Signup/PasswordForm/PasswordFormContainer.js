import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, getSignupStep } from 'state/auth';

import PasswordForm from './PasswordForm';
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
    form: 'signupPassword',
    validate,
    onSubmit: (values, store, { signupStart }) => signupStart(values),
  })
)(PasswordForm);
