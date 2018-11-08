import { createActions } from 'redux-yo';

export const appActions = createActions(
  ['loadApps', 'stopWatching', 'depositApp', 'openDapp'],
  'apps'
);
