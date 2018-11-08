import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { promisifyAction } from 'redux-yo';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

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
  translate('translation'),
  reduxForm({
    form: 'signupPassword',
    validate,
    onSubmit: (values, store, { signupStart }) => promisifyAction(signupStart, values),
  })
)(PasswordForm);
