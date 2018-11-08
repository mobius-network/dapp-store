import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { submitDappActions } from 'state/submitDapp';
import { getIsFetching } from 'state/requests';

import CreateAccount from './CreateAccount';

const mapStateToProps = createStructuredSelector({
  isUserAccountCreating: state => getIsFetching(state, { operation: 'createUserAccount' }),
  isUserAccountLoading: state => getIsFetching(state, { operation: 'loadUserAccount' }),
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
)(CreateAccount);
