import { compose } from 'redux';
import { connect } from 'react-redux';
import loadAppsSaga from 'state/sagas/loadApps';

import { getApps } from 'state/apps';

import { restQuery } from 'components/hocs';
import Loading from 'components/Loading';
import DappList from './DappList';

const mapStateToProps = state => ({
  apps: getApps(state),
});

export default compose(
  restQuery({
    ...loadAppsSaga,
    placeholder: Loading,
  }),
  connect(mapStateToProps)
)(DappList);
