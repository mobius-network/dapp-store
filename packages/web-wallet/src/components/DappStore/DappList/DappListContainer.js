import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestActions } from 'state/requests';
import { authActions, getIsAuthorized } from 'state/auth';

import DappList from './DappList';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

const actions = {
  ...authActions,
  ...requestActions,
};

export default connect(mapStateToProps, actions)(DappList);
