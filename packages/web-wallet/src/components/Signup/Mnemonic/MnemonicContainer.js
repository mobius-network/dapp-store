import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions, getMnemonic } from 'state/auth';

import Mnemonic from './Mnemonic';

const mapStateToProps = createStructuredSelector({
  mnemonic: getMnemonic,
});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(Mnemonic);
