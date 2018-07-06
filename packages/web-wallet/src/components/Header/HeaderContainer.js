import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import { getIsAuthorized } from 'state/auth';

import Header from './Header';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
});

export default compose(connect(mapStateToProps), translate('translation'))(Header);
