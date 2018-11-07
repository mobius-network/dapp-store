import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';
import CopyField from 'components/shared/CopyField';
import { MnemonicPhraseRow } from './styles';

class Mnemonic extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    signupSuccess: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { mnemonic, signupSuccess, t } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          title={t('mnemonic.title')}
          caption={t('mnemonic.caption')}
        />

        <Pane.Section>
          <MnemonicPhraseRow>
            <CopyField text={mnemonic} />
          </MnemonicPhraseRow>

          <Button to="/onboarding" onClick={signupSuccess} fullWidth>
            {t('mnemonic.submitButton')}
          </Button>
        </Pane.Section>
      </Pane>
    );
  }
}

export default Mnemonic;
