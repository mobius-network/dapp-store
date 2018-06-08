import { getIsLoggedIn, getAccountPending } from './selectors';

const waitForMasterAccount = store => () =>
  new Promise(resolve => {
    const state = store.getState();

    if (!getIsLoggedIn(state) || getAccountPending(state)) {
      resolve();
      return;
    }

    store.subscribe(() => {
      if (store.getState().balance.masterAccount) {
        resolve();
      }
    });
  });

export default waitForMasterAccount;
