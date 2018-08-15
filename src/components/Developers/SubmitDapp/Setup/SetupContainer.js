import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getUserAccountKeypair } from 'state/auth';
import { submitDappActions } from 'state/submitDapp';

import Setup from './Setup';

const mapStateToProps = createStructuredSelector({
  publicKey: state => getUserAccountKeypair(state, {
    accountNumber: state.submitDapp.userAccountNumber,
  }).publicKey(),
  secret: state => getUserAccountKeypair(state, {
    accountNumber: state.submitDapp.userAccountNumber,
  }).secret(),
});

const actions = {
  ...submitDappActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Setup);
