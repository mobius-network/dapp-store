import React, { Component } from 'react';

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
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Header theme="dark" />
          <Grid>
            <Grid.Row flexWrap="wrap">
              <Grid.Col width={[1, 1, 1 / 2]}>
                <TitleContainer>
                  <Title>DApp Store</Title>
                  <Subtitle>
                    Checkout great apps that you can pay for using MOBI.
                  </Subtitle>
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
                <SubmitTitle>Submit Your Own DApps</SubmitTitle>
                <SubmitText>
                  The Mobius SDK makes it easy to start collecting coin
                  payments.
                </SubmitText>
                <Button to="/developers/start">GET STARTED</Button>
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
