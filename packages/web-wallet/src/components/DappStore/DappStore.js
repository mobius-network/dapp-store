import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { faPlay } from '@fortawesome/fontawesome-free-solid';

import Header from 'components/Header';
import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';
import Modal from 'components/shared/Modal';
import VideoContent from 'components/shared/VideoContent';

import FeaturedDapp from './FeaturedDapp';
import DappList from './DappList';

import {
  Container,
  DevWalkThroughButton,
  HeaderContainer,
  Submit,
  SubmitText,
  SubmitTitle,
  Subtitle,
  Title,
  TitleContainer,
  UserWalkThroughIcon,
} from './styles';

class DappStore extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = {
    modals: {
      user: false,
      dev: false,
    },
  };

  openIntroModal = type => () =>
    this.setState({
      modals: {
        ...this.state.modals,
        [type]: true,
      },
    });

  closeIntroModal = type => () =>
    this.setState({
      modals: {
        ...this.state.modals,
        [type]: false,
      },
    });

  render() {
    const { t } = this.props;
    const { modals } = this.state;

    return (
      <Fragment>
        <Container>
          <HeaderContainer>
            <Header theme="dark" />
            <Grid>
              <Grid.Row flexWrap="wrap">
                <Grid.Col width={[1, 1, 1 / 2]}>
                  <TitleContainer>
                    <Title>{t('dappStore.title')}</Title>
                    <Subtitle>{t('dappStore.subtitle')}</Subtitle>
                  </TitleContainer>
                  <Button type="button" onClick={this.openIntroModal('user')}>
                    <UserWalkThroughIcon icon={faPlay} />
                    {t('dappStore.userWalkThroughIcon')}
                  </Button>
                </Grid.Col>
                <Grid.Col width={[1, 1, 1 / 2]}>
                  <FeaturedDapp />
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </HeaderContainer>

          <Grid>
            <Grid.Row flexWrap="wrap">
              <Grid.Col width={[1, 1, 1 / 4]}>
                <Submit>
                  <SubmitTitle>{t('dappStore.submitTitle')}</SubmitTitle>
                  <SubmitText>{t('dappStore.submitText')}</SubmitText>
                  <DevWalkThroughButton
                    type="button"
                    onClick={this.openIntroModal('dev')}
                  >
                    <VideoContent src="https://www.youtube.com/embed/GzIaUn8Wtw8?rel=0&controls=0&showinfo=0" />
                  </DevWalkThroughButton>
                  <Button
                    href="https://docs.mobius.network/docs/getting-started"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t('dappStore.submitButton')}
                  </Button>
                </Submit>
              </Grid.Col>

              <Grid.Col width={[1, 1, 3 / 4]}>
                <DappList />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Container>

        <Modal
          closeButton
          isOpen={modals.user}
          onRequestClose={this.closeIntroModal('user')}
          title={t('dappStore.userWalkThroughTitle')}
        >
          <VideoContent src="https://www.youtube.com/embed/oub7xLgJozU" />
        </Modal>
        <Modal
          closeButton
          isOpen={modals.dev}
          onRequestClose={this.closeIntroModal('dev')}
          title={t('dappStore.devWalkThroughTitle')}
        >
          <VideoContent src="https://www.youtube.com/embed/GzIaUn8Wtw8" />
        </Modal>
      </Fragment>
    );
  }
}

export default DappStore;
