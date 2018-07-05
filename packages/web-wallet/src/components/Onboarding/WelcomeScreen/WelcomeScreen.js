import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

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
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Container theme="wide">
        <Header>
          <HeaderLogo theme="dark" />
          <HeaderTitle>{t('welcomeScreen.title')}</HeaderTitle>
          <HeaderCaption>{t('welcomeScreen.caption')}</HeaderCaption>
        </Header>

        <Content>
          <ContentSteps>
            <ContentStep>
              <ContentStepIcon>1</ContentStepIcon>
              <ContentStepText>{t('welcomeScreen.firstStep')}</ContentStepText>
            </ContentStep>
            <ContentStep>
              <ContentStepIcon>2</ContentStepIcon>
              <ContentStepText>{t('welcomeScreen.secondStep')}</ContentStepText>
            </ContentStep>
            <ContentStep>
              <ContentStepIcon>3</ContentStepIcon>
              <ContentStepText>{t('welcomeScreen.thirdStep')}</ContentStepText>
            </ContentStep>
          </ContentSteps>
          <Button to="/onboarding/xlm" fullWidth>
            {t('shared.continue')}
          </Button>
        </Content>
      </Container>
    );
  }
}

export default translate()(WelcomeScreen);
