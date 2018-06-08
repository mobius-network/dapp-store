import React, { Component } from 'react';

import Button from 'components/shared/Button';
import {
  Container,
  Header,
  HeaderLogo,
  HeaderTitle,
  HeaderCaption,
  Content,
  ContentSteps,
  ContentStep,
  ContentStepIcon,
  ContentStepText,
} from './styles';

class WelcomeScreen extends Component {
  render() {
    return (
      <Container theme="wide">
        <Header>
          <HeaderLogo theme="dark" />
          <HeaderTitle>Welcome to Mobius!</HeaderTitle>
          <HeaderCaption>
            Let’s finish setting up your Mobius wallet
          </HeaderCaption>
        </Header>

        <Content>
          <ContentSteps>
            <ContentStep>
              <ContentStepIcon>1</ContentStepIcon>
              <ContentStepText>Transfer XLM to your new wallet</ContentStepText>
            </ContentStep>
            <ContentStep>
              <ContentStepIcon>2</ContentStepIcon>
              <ContentStepText>Add MOBI to your wallet</ContentStepText>
            </ContentStep>
            <ContentStep>
              <ContentStepIcon>3</ContentStepIcon>
              <ContentStepText>Start making purchases in DApps</ContentStepText>
            </ContentStep>
          </ContentSteps>
          <Button to="/onboarding/xlm" fullWidth>
            Continue
          </Button>
        </Content>
      </Container>
    );
  }
}

export default WelcomeScreen;
