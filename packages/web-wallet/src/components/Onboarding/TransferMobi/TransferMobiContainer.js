import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, signupStep } from 'state/auth';

import TransferMobi from './TransferMobi';

const mapStateToProps = createStructuredSelector({
  signupStep,
});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(TransferMobi);
