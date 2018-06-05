import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getIsAuthorized } from 'state/auth';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

export default connect(mapStateToProps)(PrivateRoute);
