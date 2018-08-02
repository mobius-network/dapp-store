import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import {
  getUserAccount,
  getUserAccountBalance,
  getUserAccountNumber,
  submitDappActions,
} from 'state/submitDapp';
import { userAccountsActions, getDappIsSubmitting } from 'state/userAccounts';

import DetailsForm from './DetailsForm';

const mapStateToProps = createStructuredSelector({
  isSubmitting: getDappIsSubmitting,
  userAccount: getUserAccount,
  userAccountBalance: getUserAccountBalance,
  userAccountNumber: getUserAccountNumber,
});

const mapDispatchToProps = {
  ...submitDappActions,
  ...userAccountsActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  translate('translation')
)(DetailsForm);
