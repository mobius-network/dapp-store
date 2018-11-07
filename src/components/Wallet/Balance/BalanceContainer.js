import loadAppsSaga from 'state/sagas/loadApps';

import Loading from 'components/Loading';
import { restQuery } from 'components/hocs';
import Balance from './Balance';

export default restQuery({
  ...loadAppsSaga,
  placeholder: Loading,
})(Balance);
