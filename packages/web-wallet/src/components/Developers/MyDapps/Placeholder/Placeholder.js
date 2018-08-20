import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';

import Pane from 'components/shared/Pane';
import Grid from 'components/shared/Grid';

import {
  Action,
  ActionTitle,
  ActionDesc,
  ActionButton,
  Message,
  MessageImage,
  MessageText,
} from './styles';

class Placeholder extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <Pane.Section>
          <Message>
            <MessageImage />
            <MessageText>{t('myDapps.placeholderMessage')}</MessageText>
          </Message>
        </Pane.Section>

        <Pane.Section>
          <Grid>
            <Grid.Row flexWrap="wrap">
              <Grid.Col width={[1, 1, 1 / 3]}>
                <Action>
                  <ActionTitle>
                    {t('myDapps.placeholderActions.gettingStarted.title')}
                  </ActionTitle>
                  <ActionDesc>
                    {t('myDapps.placeholderActions.gettingStarted.desc')}
                  </ActionDesc>
                  <ActionButton
                    href="https://docs.mobius.network/docs/getting-started"
                    rel="noopener noreferrer"
                    square
                    target="_blank"
                    title={t('myDapps.placeholderActions.gettingStarted.title')}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </ActionButton>
                </Action>
              </Grid.Col>

              <Grid.Col width={[1, 1, 1 / 3]}>
                <Action>
                  <ActionTitle>
                    {t('myDapps.placeholderActions.docs.title')}
                  </ActionTitle>
                  <ActionDesc>
                    {t('myDapps.placeholderActions.docs.desc')}
                  </ActionDesc>
                  <ActionButton
                    href="https://docs.mobius.network"
                    rel="noopener noreferrer"
                    square
                    target="_blank"
                    title={t('myDapps.placeholderActions.docs.title')}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </ActionButton>
                </Action>
              </Grid.Col>

              <Grid.Col width={[1, 1, 1 / 3]}>
                <Action>
                  <ActionTitle>
                    {t('myDapps.placeholderActions.submit.title')}
                  </ActionTitle>
                  <ActionDesc>
                    {t('myDapps.placeholderActions.submit.desc')}
                  </ActionDesc>
                  <ActionButton
                    square
                    title={t('myDapps.placeholderActions.submit.title')}
                    to="/developers/submit"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </ActionButton>
                </Action>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Pane.Section>
      </Fragment>
    );
  }
}

export default Placeholder;
