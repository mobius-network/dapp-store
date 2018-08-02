import { createSelector } from 'reselect';
import { isNil, isEmpty } from 'lodash';

import { getUserAccountId } from 'state/userAccounts';
import { getDappCatalog } from 'state/storeAccount';

export const getEditStep = state => state.editDapp.editStep;

export const getIsDappSubmitted = createSelector(
  [getUserAccountId, getDappCatalog],
  (userAccountId, dappCatalog) => {
    if (isEmpty(dappCatalog)) {
      return false;
    }

    const entry = dappCatalog[userAccountId];

    if (isNil(entry)) {
      return false;
    }

    return true;
  }
);
