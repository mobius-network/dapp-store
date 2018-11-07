import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from 'components/shared/Grid';
import Pane from 'components/shared/Pane';
import AppAllocation from './AppAllocation';
import { AppsList } from './styles';

class AppAllocations extends Component {
  static propTypes = {
    apps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
    t: PropTypes.func.isRequired,
  };

  render() {
    const { apps, t } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header
          caption={t('appAllocations.caption')}
          title={t('appAllocations.title')}
        />
        <AppsList>
          <Grid>
            <Grid.Row flexWrap="wrap">
              {apps.map(app => (
                <AppAllocation key={app.id} app={app} />
              ))}
            </Grid.Row>
          </Grid>
        </AppsList>
      </Pane>
    );
  }
}

export default AppAllocations;
