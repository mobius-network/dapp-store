import { appActions } from 'state/apps';

import { restQuery } from 'components/hocs';
import DappStore from './DappStore';

export default restQuery({
  name: 'loadApps',
  action: appActions.loadApps,
})(DappStore);
