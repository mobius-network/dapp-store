import loadAppsSaga from 'state/sagas/loadApps';

import { restQuery } from 'components/hocs';
import Loading from 'components/Loading';
import DappList from './DappList';

export default restQuery({
  ...loadAppsSaga,
  placeholder: Loading,
})(DappList);
