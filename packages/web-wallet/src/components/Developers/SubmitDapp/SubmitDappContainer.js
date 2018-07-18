import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getSubmitStep } from 'state/submitDapp';

import SubmitDapp from './SubmitDapp';

const mapStateToProps = createStructuredSelector({
  submitStep: getSubmitStep,
});

export default connect(mapStateToProps)(SubmitDapp);
