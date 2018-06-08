import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { requestActions } from 'state/requests';
import { accountActions, getAssetBalance } from 'state/account';
import { transfersActions } from 'state/transfers';

import WithdrawForm from './WithdrawForm';

const mapStateToProps = (state, { asset }) => ({
  form: `${asset}WithdrawForm`,
  balance: getAssetBalance(state, { asset }),
});

const actions = {
  ...accountActions,
  ...transfersActions,
  ...requestActions,
};

export default compose(connect(mapStateToProps, actions), reduxForm())(WithdrawForm);
