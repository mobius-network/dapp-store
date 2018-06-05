import React from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

const DownloadKeypair = ({ downloadKeypair }) => (
  <Pane theme="wide" withGradient>
    <Pane.Header
      title="Download Your Key Pair"
      caption="You will need your key pair file in order to login to you wallet in the future.
        Store it in a safe place."
    />

    <Pane.Section>
      <Button theme="secondary" onClick={downloadKeypair} fullWidth>
        Download Now
      </Button>
    </Pane.Section>
  </Pane>
);

DownloadKeypair.propTypes = {
  downloadKeypair: PropTypes.func.isRequired,
};

export default DownloadKeypair;
