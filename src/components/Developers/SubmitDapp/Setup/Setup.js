import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';
import AdditionalInfo from 'components/shared/AdditionalInfo';

import { submitSteps } from 'state/submitDapp';

import { Explanation } from './styles';

class Setup extends Component {
  static propTypes = {
    publicKey: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    setSubmitStep: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  handleContinueButtonClick = () => this.props.setSubmitStep(submitSteps.detailsForm);

  render() {
    const { publicKey, secret, t } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header title={t('submitDapp.setup.title')} />
        <Pane.Section>
          <Explanation>{t('submitDapp.setup.explanation')}</Explanation>
          <AdditionalInfo label={t('submitDapp.setup.publicKey')}>
            {publicKey}
          </AdditionalInfo>
          <AdditionalInfo label={t('submitDapp.setup.secretkey')}>
            {secret}
          </AdditionalInfo>
        </Pane.Section>
        <Pane.Footer>
          <Button onClick={this.handleContinueButtonClick} wide>
            {t('shared.continue')}
          </Button>
        </Pane.Footer>
      </Pane>
    );
  }
}

export default Setup;
