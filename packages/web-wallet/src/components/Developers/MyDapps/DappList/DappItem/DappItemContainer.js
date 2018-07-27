import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getIsSuccess } from 'state/requests';
import { getUserAccountKeypair } from 'state/auth';
import {
  userAccountsActions,
  getDappDetails,
  getUserAccount,
  getDappStatus,
  getUserAccountBalance,
} from 'state/userAccounts';

import DappItem from './DappItem';

const mapStateToProps = (state, ownProps) => ({
  dappDetails: getDappDetails(state, { id: ownProps.accountNumber }),
  dappStatus: getDappStatus(state, { id: ownProps.accountNumber }),
  isLoaded: getIsSuccess(state, {
    operation: `loadUserAccountWithDapp_${ownProps.accountNumber}`,
  }),
  userAccount: getUserAccount(state, { id: ownProps.accountNumber }),
  userAccountBalance: getUserAccountBalance(state, {
    id: ownProps.accountNumber,
  }),
  userAccountKeypair: getUserAccountKeypair(state, {
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
