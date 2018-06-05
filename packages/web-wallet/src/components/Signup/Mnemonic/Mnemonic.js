import React from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

const Mnemonic = ({ mnemonic, signupSuccess }) => (
  <Pane theme="wide" withGradient>
    <Pane.Header
      title="Write Down Your Mnemonic Phrase"
      caption="If you ever lose your key pair you can use your mnemonic phrase
        to recover your account."
    />

    <Pane.Section>
      <p>{mnemonic}</p>

      <Button to="/onboarding" onClick={signupSuccess} fullWidth>
        I’ve Written it Down
      </Button>
    </Pane.Section>
  </Pane>
);

Mnemonic.propTypes = {
  mnemonic: PropTypes.string.isRequired,
  signupSuccess: PropTypes.func.isRequired,
};

export default Mnemonic;
