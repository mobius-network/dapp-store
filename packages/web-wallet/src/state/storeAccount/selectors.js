import { createSelector } from 'reselect';
import { isNil, isEmpty } from 'lodash';

export const getStoreAccount = state => state.storeAccount;

export const getDappCatalog = createSelector(
  getStoreAccount,
  account => account.data_attr
);

export const getDappCatalogEntry = entryId =>
  createSelector(getDappCatalog, dappCatalog => {
    if (isEmpty(dappCatalog)) {
      return undefined;
    }

    const entry = dappCatalog[entryId];

    if (isNil(entry)) {
      return undefined;
    }

    const parsedEntryString = atob(entry).split(':');

    return {
      appId: parsedEntryString[0],
      status: parsedEntryString[1],
      hash: parsedEntryString[2],
    };
  });
