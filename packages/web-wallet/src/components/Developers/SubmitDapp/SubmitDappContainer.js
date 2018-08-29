import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { promisifyAction } from 'redux-yo';
import { createStructuredSelector } from 'reselect';

import { authActions, getIsAuthorized } from 'state/auth';

import SubmitDapp from './SubmitDapp';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

const actions = {
  ...authActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({
    form: 'submitDapp',
    onSubmit: (values, store, { submitDapp }) => promisifyAction(submitDapp, values),
  })
)(SubmitDapp);
