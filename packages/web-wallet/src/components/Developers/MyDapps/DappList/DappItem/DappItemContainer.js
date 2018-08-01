import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getUserAccountKeypair } from 'state/auth';
import {
  userAccountsActions,
  getUserAccountBalance,
  getUserDappDetails,
  getDappStatus,
} from 'state/userAccounts';

import DappItem from './DappItem';

const mapStateToProps = (state, ownProps) => ({
  userAccountBalance: getUserAccountBalance(state, {
    accountNumber: ownProps.accountNumber,
  }),
  userAccountKeypair: getUserAccountKeypair(state, {
    accountNumber: ownProps.accountNumber,
  }),
  userDappDetails: getUserDappDetails(state, {
    accountNumber: ownProps.accountNumber,
  }),
  dappStatus: getDappStatus(state, { accountNumber: ownProps.accountNumber }),
});

const mapDispatchToProps = {
  ...userAccountsActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  translate('translation')
)(DappItem);
