import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getIsDappSubmitted } from 'state/editDapp';
import { storeAccountActions } from 'state/storeAccount';

import Completed from './Completed';

const mapStateToProps = (state, ownProps) => ({
  isDappSubmitted: getIsDappSubmitted(state, {
    accountNumber: ownProps.match.params.id,
  }),
});

const actions = {
  ...storeAccountActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(Completed);
