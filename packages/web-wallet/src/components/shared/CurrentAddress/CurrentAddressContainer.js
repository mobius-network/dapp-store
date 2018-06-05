import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getPublicKeyFor } from 'state/auth';

import CurrentAddress from './CurrentAddress';

const mapStateToProps = createStructuredSelector({
  publicKey: getPublicKeyFor,
});

export default connect(mapStateToProps)(CurrentAddress);
