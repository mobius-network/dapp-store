import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getUserAccountKeypair } from 'state/auth';
import {
  getAccountIsLoaded,
  getDappIsSubmitting,
  getUserAccount,
  getUserAccountBalance,
  getUserDappDetails,
  userAccountsActions,
} from 'state/userAccounts';
import { editDappActions } from 'state/editDapp';

import DetailsForm from './DetailsForm';

const mapStateToProps = (state, ownProps) => ({
  isSubmitting: getDappIsSubmitting(state),
  isLoaded: getAccountIsLoaded(state, {
    accountNumber: ownProps.match.params.id,
  }),
  userAccount: getUserAccount(state, {
    accountNumber: ownProps.match.params.id,
  }),
  userAccountBalance: getUserAccountBalance(state, {
    accountNumber: ownProps.match.params.id,
  }),
  userAccountKeypair: getUserAccountKeypair(state, {
    accountNumber: ownProps.match.params.id,
  }),
  userDappDetails: getUserDappDetails(state, {
    accountNumber: ownProps.match.params.id,
  }),
});

const mapDispatchToProps = {
  ...editDappActions,
  ...userAccountsActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  translate('translation')
)(DetailsForm);
