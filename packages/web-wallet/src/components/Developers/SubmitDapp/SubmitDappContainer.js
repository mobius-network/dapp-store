import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import { authActions, getIsAuthorized } from 'state/auth';

import { validate } from './validations';
import SubmitDapp from './SubmitDapp';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

const actions = {
  ...authActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation'),
  reduxForm({
    form: 'submitDapp',
    validate,
    onSubmit: () => {},
  })
)(SubmitDapp);
