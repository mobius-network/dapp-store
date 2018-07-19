import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { translate } from 'react-i18next';
import { promisifyAction } from 'redux-yo';
import { createStructuredSelector } from 'reselect';

import { getIsFetching } from 'state/requests';
import { submitDappActions } from 'state/submitDapp';
import { storeAccountActions } from 'state/storeAccount';

import { validate } from './validations';

import DetailsForm from './DetailsForm';

const mapStateToProps = createStructuredSelector({
  isDataUploadingToIpfs: state =>
    getIsFetching(state, { operation: 'addFilesToIpfs' }),
  isSubmitting: state => getIsFetching(state, { operation: 'submitDapp' }),
  isUserAccountFunding: state =>
    getIsFetching(state, { operation: 'fundUserAccount' }),
  isUserAccountLoading: state =>
    getIsFetching(state, { operation: 'loadUserAccount' }),
});

const actions = {
  ...submitDappActions,
  ...storeAccountActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation'),
  reduxForm({
    form: 'submitDapp',
    validate,
    onSubmit: (values, store, { submitDapp }) =>
      promisifyAction(submitDapp, values).catch(error => {
        throw new SubmissionError(error);
      }),
  })
)(DetailsForm);
