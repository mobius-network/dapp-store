import { createSelector } from 'reselect';
import { isNil, isEmpty } from 'lodash';
import { parseBalance, parsedBalanceValue } from 'core';

import { getDappCatalog } from 'state/storeAccount';
import { getIsFetching } from 'state/requests';

export const getSubmitStep = state => state.submitDapp.submitStep;

export const getUserAccount = state => state.submitDapp.userAccount;

export const getUserAccountNumber = state => state.submitDapp.userAccountNumber;

export const getUserAccountId = createSelector(
  getUserAccount,
  account => account.id
);

export const getAsset = (_, { asset = 'mobi' } = {}) => asset;

export const getMobiAsset = () => 'mobi';

export const createBalanceSelector = accountSelector => createSelector(accountSelector, account => parseBalance(account));

export const createAssetBalanceSelector = (
  balanceSelector,
  assetSelector = getAsset
) => createSelector([balanceSelector, assetSelector], (balance, asset) => {
  if (!balance) {
    return 0;
  }

  return parsedBalanceValue(balance, asset);
});

export const getBalance = createBalanceSelector(getUserAccount);

export const getMobiBalance = createAssetBalanceSelector(
  getBalance,
  getMobiAsset
);

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

export const getDappIsSubmitting = createSelector(
  state => getIsFetching(state, { operation: 'addFilesToIpfs' }),
  state => getIsFetching(state, { operation: 'submitDapp' }),
  state => getIsFetching(state, { operation: 'fundUserAccount' }),
  state => getIsFetching(state, { operation: 'loadUserAccount' }),
  (
    isDataUploadingToIpfs,
    isSubmitting,
    isUserAccountFunding,
    isUserAccountLoading
  ) => isDataUploadingToIpfs
    || isSubmitting
    || isUserAccountFunding
    || isUserAccountLoading
);
