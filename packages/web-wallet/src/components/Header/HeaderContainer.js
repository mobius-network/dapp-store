import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getIsAuthorized } from 'state/auth';

import Header from './Header';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

export default connect(mapStateToProps)(Header);
