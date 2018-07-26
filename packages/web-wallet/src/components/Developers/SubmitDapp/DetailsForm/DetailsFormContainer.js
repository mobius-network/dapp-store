import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { submit } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { getIsFetching } from 'state/requests';
import { submitDappActions, getDAppIsSubmitting } from 'state/submitDapp';

import DetailsForm from './DetailsForm';

const mapStateToProps = createStructuredSelector({
  isSubmitting: getDAppIsSubmitting,
  isUserAccountMerging: state =>
    getIsFetching(state, { operation: 'mergeUserAccount' }),
});

const actions = {
  ...submitDappActions,
  submitDappForm: () => submit('dappForm'),
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(DetailsForm);
