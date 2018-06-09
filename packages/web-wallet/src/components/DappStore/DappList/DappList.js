import React, { Component } from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';

import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';
import { Submit, SubmitTitle, SubmitText } from './styles';
import DappItem from './DappItem';

class DappList extends Component {
  static propTypes = {
    apps: array,
  };

  render() {
    const { apps } = this.props;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col width={[1, 1 / 4]}>
            <Submit>
              <SubmitTitle>Submit Your Own DApps</SubmitTitle>
              <SubmitText>
                The Mobius SDK makes it easy to start collecting coin payments.
              </SubmitText>
              <Button to="/developers">GET STARTED</Button>
            </Submit>
          </Grid.Col>

          <Grid.Col width={1}>
            {isEmpty(apps) ? (
              <p>Loading</p>
            ) : (
              apps.map(app => <DappItem key={app.id} app={app} />)
            )}
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  }
}

export default DappList;
