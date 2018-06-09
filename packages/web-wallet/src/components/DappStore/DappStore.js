import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Grid from 'components/shared/Grid';
import FeaturedDapp from './FeaturedDapp';
import {
  Container,
  HeaderContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';

class DappStore extends Component {
  static propTypes = {
    apps: PropTypes.array,
    loadApps: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadApps();
  }

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
      </Container>
    );
  }
}

export default DappStore;
