import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import { getFeaturedApp } from 'state/apps';
import { getIsAuthorized } from 'state/auth';

import FeaturedDapp from './FeaturedDapp';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
  app: getFeaturedApp,
});

export default compose(connect(mapStateToProps), translate('translation'))(FeaturedDapp);
