import React, { Component } from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';

import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';
import {
  Submit,
  SubmitTitle,
  SubmitText,
  Spinner,
  SpinnerIcon,
  SpinnerText,
} from './styles';
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
              <Spinner>
                <SpinnerIcon>
                  <FontAwesomeIcon icon={faCircleNotch} size="2x" spin />
                </SpinnerIcon>
                <SpinnerText>Loading</SpinnerText>
              </Spinner>
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
