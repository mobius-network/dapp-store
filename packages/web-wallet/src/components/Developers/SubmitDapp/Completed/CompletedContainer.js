import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getIsDappSubmitted } from 'state/submitDapp';
import { storeAccountActions } from 'state/storeAccount';

import Completed from './Completed';

const mapStateToProps = createStructuredSelector({
  isDappSubmitted: getIsDappSubmitted,
});

const actions = {
  ...storeAccountActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(Completed);
