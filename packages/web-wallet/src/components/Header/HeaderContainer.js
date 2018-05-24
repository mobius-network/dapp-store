import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions } from 'state/auth';

import Header from './Header';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(Header);
