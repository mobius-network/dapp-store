import { takeLatest, call, put, select } from 'redux-saga/effects';
import { safeLoadAccount } from 'core';

import { accountActions } from 'state/account';
import { getPublicKeyFor } from 'state/auth';
import { notificationsActions } from 'state/notifications';
import { fetchStart } from 'state/requests';

export function* reloadMasterAccount() {
  const publicKey = yield select(getPublicKeyFor);

  try {
    const { masterAccount } = yield call(fetchStart, {
      name: 'reloadMasterAccount',
      fetcher: safeLoadAccount,
      payload: publicKey,
      serialize: result => ({
        masterAccount: result,
      }),
    });

    if (masterAccount) {
      yield put(accountActions.setMasterAccount(masterAccount));
    }
  } catch (error) {
    yield put(notificationsActions.addNotification({
      type: 'error',
      message: error.message,
    }));
  }
}

export default takeLatest(
  accountActions.reloadMasterAccount,
  reloadMasterAccount
);
