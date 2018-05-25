import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, signupStep } from 'state/auth';

import TransferXlm from './TransferXlm';

const mapStateToProps = createStructuredSelector({
  signupStep,
});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(TransferXlm);
