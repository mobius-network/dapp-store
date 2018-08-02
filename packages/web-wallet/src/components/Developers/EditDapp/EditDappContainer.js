import { connect } from 'react-redux';

import { storeAccountActions } from 'state/storeAccount';
import { getIsSuccess } from 'state/requests';
import { getEditStep } from 'state/editDapp';

import EditDapp from './EditDapp';

const mapStateToProps = state => ({
  editStep: getEditStep(state),
  isStoreAccountLoaded: getIsSuccess(state, { operation: 'loadStoreAccount' }),
});

const mapDispatchToProps = {
  ...storeAccountActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDapp);
