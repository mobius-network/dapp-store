import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isAuthorized } from 'state/auth';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = createStructuredSelector({
  isAuthorized,
});

export default connect(mapStateToProps)(PrivateRoute);
