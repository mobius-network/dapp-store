import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, getIsAuthorized } from 'state/auth';

import SubmitDapp from './SubmitDapp';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(SubmitDapp);
