import React, { Component } from 'react';

import Pane from 'components/shared/Pane';

import {
  SectionHeading,
  SectionDesc,
  VideoContainer,
  VideoElement,
  Links,
  LinkContainer,
  LinkItem,
  LinkItemTitle,
  LinkItemUrl,
} from './styles';

class GettingStarted extends Component {
  render() {
    return (
      <Pane theme="wide">
        <Pane.Header
          title="Getting Started"
          caption="Everything you need to start developing and earning money in the DApp store."
        />
        <Pane.Section>
          <SectionHeading>Overview</SectionHeading>
          <SectionDesc>
            Watch this video to get an overview of how DApps allow you to
            quickly and easily accept cryptocurrency payments.
          </SectionDesc>

          <VideoContainer>
            <VideoElement
              allowFullScreen
              frameBorder="0"
              src="https://www.youtube.com/embed/GzIaUn8Wtw8"
            />
          </VideoContainer>

          <SectionHeading>Resources</SectionHeading>
          <SectionDesc>
            Use these resources to begin learning how to create and launch your
            DApp.
          </SectionDesc>
          <Links>
            <LinkContainer>
              <LinkItem
                href="https://mobius.network/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>API Docs</LinkItemTitle>
                <LinkItemUrl>mobius.network/docs</LinkItemUrl>
              </LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                href="https://docsend.com/view/ru9kz86"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>Mobius White Paper</LinkItemTitle>
                <LinkItemUrl>docsend.com/view/ru9kz86</LinkItemUrl>
              </LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                href="https://www.stellar.org/developers/js-stellar-sdk/reference/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>Stellar SDK</LinkItemTitle>
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
                <LinkItemTitle>Stellar Explainer Videos</LinkItemTitle>
                <LinkItemUrl>lumenauts.com</LinkItemUrl>
              </LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                href="https://mobius-network.slack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkItemTitle>MOBI Developer Slack</LinkItemTitle>
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
