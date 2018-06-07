import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';
import CopyField from 'components/shared/CopyField';
import { MnemonicPhraseRow } from './styles';

export default class Mnemonic extends Component {
  static propTypes = {
    mnemonic: PropTypes.string.isRequired,
    signupSuccess: PropTypes.func.isRequired,
  };

  render() {
    const { mnemonic, signupSuccess } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          title="Write Down Your Mnemonic Phrase"
          caption="If you ever lose your key pair you can use your mnemonic phrase
            to recover your account."
        />

        <Pane.Section>
          <MnemonicPhraseRow>
            <CopyField text={mnemonic} />
          </MnemonicPhraseRow>

          <Button to="/onboarding" onClick={signupSuccess} fullWidth>
            I’ve Written it Down
          </Button>
        </Pane.Section>
      </Pane>
    );
  }
}
