import { getMasterAccount } from 'state/account/selectors';
import { getIsLoggedIn } from './selectors';

const waitForMasterAccount = store => () =>
  new Promise(resolve => {
    const state = store.getState();

    if (!getIsLoggedIn(state)) {
      resolve();
      return;
    }

    store.subscribe(() => {
      if (getMasterAccount(store.getState())) {
        resolve();
      }
    });
  });

export default waitForMasterAccount;
