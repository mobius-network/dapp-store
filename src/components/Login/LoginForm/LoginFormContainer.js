import { compose } from 'redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { promisifyAction } from 'redux-yo';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

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
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation'),
  reduxForm({
    form: 'loginForm',
    validate,
    onSubmit: (values, store, { loginStart }) => promisifyAction(loginStart, values).catch((error) => {
      throw new SubmissionError(error);
    }),
  })
)(LoginForm);
