import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authActions } from 'state/auth';
import { getMnemonic } from 'state/balance';

import Mnemonic from './Mnemonic';

const mapStateToProps = createStructuredSelector({
  mnemonic: getMnemonic,
});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(Mnemonic);
