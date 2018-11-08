import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import { authActions, getMnemonic } from 'state/auth';

import Mnemonic from './Mnemonic';

const mapStateToProps = createStructuredSelector({
  mnemonic: getMnemonic,
});

const actions = {
  ...authActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(Mnemonic);
