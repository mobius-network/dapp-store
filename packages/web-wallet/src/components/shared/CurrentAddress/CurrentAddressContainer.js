import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import { getPublicKeyFor } from 'state/auth';

import CurrentAddress from './CurrentAddress';

const mapStateToProps = createStructuredSelector({
  publicKey: getPublicKeyFor,
});

export default compose(connect(mapStateToProps), translate('translation'))(CurrentAddress);
