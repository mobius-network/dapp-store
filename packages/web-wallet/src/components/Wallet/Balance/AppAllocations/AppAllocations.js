import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Grid from 'components/shared/Grid';
import Pane from 'components/shared/Pane';
import AppAllocation from './AppAllocation';
import { AppsList } from './styles';

class AppAllocations extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { apps, t } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header
          title={t('appAllocations.title')}
          caption={t('appAllocations.caption')}
        />
        <AppsList>
          <Grid>
            <Grid.Row flexWrap="wrap">
              {apps.map(app => <AppAllocation app={app} key={app.id} />)}
            </Grid.Row>
          </Grid>
        </AppsList>
      </Pane>
    );
  }
}

export default translate()(AppAllocations);
