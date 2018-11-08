import { getMasterAccount } from 'state/account/selectors';
import { getIsAccountFunded, getIsLoggedIn } from './selectors';

const waitForMasterAccount = store => () => new Promise((resolve) => {
  const state = store.getState();

  if (!getIsLoggedIn(state) || !getIsAccountFunded(state)) {
    resolve();
    return;
  }

  const dispose = store.subscribe(() => {
    if (getMasterAccount(store.getState())) {
      resolve();
      dispose();
    }
  });
});

export default waitForMasterAccount;
