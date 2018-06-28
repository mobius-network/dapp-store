import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getFeaturedApp } from 'state/apps';
import { getIsAuthorized } from 'state/auth';

import FeaturedDapp from './FeaturedDapp';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
  app: getFeaturedApp,
});

export default connect(mapStateToProps)(FeaturedDapp);
