import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Grid from 'components/shared/Grid';
import FeaturedDapp from './FeaturedDapp';
import DappList from './DappList';
import {
  Container,
  HeaderContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';

class DappStore extends Component {
  static propTypes = {
    loadApps: PropTypes.object.isRequired,
  };

  render() {
    const { result: { apps } = {} } = this.props.loadApps;

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
        <DappList apps={apps} />
      </Container>
    );
  }
}

export default DappStore;
