import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

class DownloadKeypair extends Component {
  static propTypes = {
    downloadKeypair: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { downloadKeypair, t } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          caption={t('downloadKeypair.caption')}
          title={t('downloadKeypair.title')}
        />

        <Pane.Section>
          <Button fullWidth onClick={downloadKeypair} theme="secondary">
            {t('downloadKeypair.downloadButton')}
          </Button>
        </Pane.Section>
      </Pane>
    );
  }
}

export default DownloadKeypair;
