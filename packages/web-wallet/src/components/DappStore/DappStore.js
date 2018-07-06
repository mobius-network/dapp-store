import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';

import FeaturedDapp from './FeaturedDapp';
import DappList from './DappList';

import {
  Container,
  HeaderContainer,
  Subtitle,
  Title,
  TitleContainer,
  Submit,
  SubmitTitle,
  SubmitText,
} from './styles';

class DappStore extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
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
                <Button to="/developers/">{t('dappStore.submitButton')}</Button>
              </Submit>
            </Grid.Col>

            <Grid.Col width={[1, 1, 3 / 4]}>
              <DappList />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default DappStore;
