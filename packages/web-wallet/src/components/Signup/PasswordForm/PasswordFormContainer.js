import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, signupStep } from 'state/auth';

import PasswordForm from './PasswordForm';

const mapStateToProps = createStructuredSelector({
  signupStep,
});

const actions = {
  ...authActions,
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'signupPassword',
    validate: ({ password, passwordConfirmation }) => {
      const errors = {};

      if (password === passwordConfirmation) {
        // eslint-disable-next-line no-underscore-dangle
        errors._error = 'Should match';
      }

      return errors;
    },
    onSubmit: values => console.log(values),
  }),
)(PasswordForm);
