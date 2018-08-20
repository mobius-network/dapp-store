import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getIsFetching } from 'state/requests';
import { getUserAccountKeypair } from 'state/auth';
import {
  getAccountIsLoaded,
  getDappStatus,
  getUserAccount,
  getUserAccountBalance,
  getUserDappDetails,
  userAccountsActions,
} from 'state/userAccounts';

import DappItem from './DappItem';

const mapStateToProps = (state, ownProps) => ({
  dappStatus: getDappStatus(state, { accountNumber: ownProps.accountNumber }),
  isLoaded: getAccountIsLoaded(state, {
    accountNumber: ownProps.accountNumber,
  }),
  isUserAccountMerging: getIsFetching(state, { operation: 'mergeUserAccount' }),
  userAccount: getUserAccount(state, { accountNumber: ownProps.accountNumber }),
  userAccountBalance: getUserAccountBalance(state, {
    accountNumber: ownProps.accountNumber,
  }),
  userAccountKeypair: getUserAccountKeypair(state, {
    accountNumber: ownProps.accountNumber,
  }),
  userDappDetails: getUserDappDetails(state, {
    accountNumber: ownProps.accountNumber,
  }),
});

const mapDispatchToProps = {
  ...userAccountsActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  translate('translation')
)(DappItem);
