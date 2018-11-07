import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import VideoContent from 'components/shared/VideoContent';

import {
  LinkContainer,
  LinkItem,
  LinkItemTitle,
  LinkItemUrl,
  Links,
  SectionDesc,
  SectionHeading,
  VideoContentContainer,
} from './styles';

class GettingStarted extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Pane theme="wide">
        <Pane.Header
          title={t('gettingStarted.title')}
          caption={t('gettingStarted.caption')}
        />
        <Pane.Section>
          <SectionHeading>{t('gettingStarted.overviewTitle')}</SectionHeading>
          <SectionDesc>{t('gettingStarted.overviewDesc')}</SectionDesc>

          <VideoContentContainer>
            <VideoContent src="https://www.youtube.com/embed/GzIaUn8Wtw8" />
          </VideoContentContainer>

          <SectionHeading>{t('gettingStarted.resourcesTitle')}</SectionHeading>
          <SectionDesc>{t('gettingStarted.resourcesDesc')}</SectionDesc>
          <Links>
            <LinkContainer>
              <LinkItem
                href="https://mobius.network/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>{t('gettingStarted.apiDocsLink')}</LinkItemTitle>
                <LinkItemUrl>mobius.network/docs</LinkItemUrl>
              </LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                href="https://docsend.com/view/ru9kz86"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>
                  {t('gettingStarted.mobiusWhitePaperLink')}
                </LinkItemTitle>
                <LinkItemUrl>docsend.com/view/ru9kz86</LinkItemUrl>
              </LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                href="https://www.stellar.org/developers/js-stellar-sdk/reference/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>
                  {t('gettingStarted.stellarSdkLink')}
                </LinkItemTitle>
                <LinkItemUrl>
                  stellar.org/developers/js-stellar-sdk/reference/
                </LinkItemUrl>
              </LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                href="https://lumenauts.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>
                  {t('gettingStarted.stellarVideosLink')}
                </LinkItemTitle>
                <LinkItemUrl>lumenauts.com</LinkItemUrl>
              </LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                href="https://mobius-network.slack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>
                  {t('gettingStarted.mobiDeveloperSlack')}
                </LinkItemTitle>
                <LinkItemUrl>mobius-network.slack.com</LinkItemUrl>
              </LinkItem>
            </LinkContainer>
          </Links>
        </Pane.Section>
      </Pane>
    );
  }
}

export default GettingStarted;
