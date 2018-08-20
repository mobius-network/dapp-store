import { createSelector } from 'reselect';
import { isNil, isEmpty, get } from 'lodash';

export const getStoreAccount = state => state.storeAccount;

export const getDappCatalog = createSelector(getStoreAccount, storeAccount =>
  get(storeAccount, 'data_attr', {}));

export const parseDappCatalogEntry = entry => {
  if (isNil(entry)) {
    return undefined;
  }

  const parsedEntryString = atob(entry).split(':');

  return {
    appId: parsedEntryString[0],
    status: parsedEntryString[1],
    ipfsPath: parsedEntryString[2],
  };
};

export const getDappCatalogEntry = createSelector(
  [getDappCatalog, (_, { entryId } = {}) => entryId],
  (dappCatalog, entryId) => {
    if (isEmpty(dappCatalog)) {
      return undefined;
    }

    const entry = dappCatalog[entryId];

    return parseDappCatalogEntry(entry);
  }
);
