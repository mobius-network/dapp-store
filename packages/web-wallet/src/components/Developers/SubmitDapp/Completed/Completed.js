import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';
import Spinner from 'components/shared/Spinner';

import { Content, Message } from './styles';

class Completed extends Component {
  static propTypes = {
    isDappSubmitted: PropTypes.bool,
    t: PropTypes.func.isRequired,
    watchStoreAccount: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isDappSubmitted: false,
  };

  componentDidMount() {
    this.props.watchStoreAccount();
  }

  render() {
    const { isDappSubmitted, t } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header title={t('submitDapp.completed.title')} />
        <Pane.Section>
          <Grid>
            <Grid.Row justifyContent="center">
              <Grid.Col width={1 / 2}>
                {isDappSubmitted ? (
                  <Content>
                    <Message>{t('submitDapp.completed.message')}</Message>

                    <Button to="/developers/my" wide>
                      {t('submitDapp.completed.goToMyDappsButton')}
                    </Button>
                  </Content>
                ) : (
                  <Content>
                    <Spinner />
                  </Content>
                )}
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Pane.Section>
      </Pane>
    );
  }
}

export default Completed;
