import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faTelegramPlane,
  faWeixin,
  faMeetup,
  faTwitter,
  faFacebook,
  faWeibo,
  faReddit,
  faGithub,
  faMedium,
} from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';

import Modal from 'components/shared/Modal';

import {
  KakaoTalkLink,
  ListContainer,
  ListItem,
  SocialLink,
  WeChatButton,
  WeChatModalContent,
  WeChatQrCode,
} from './styles';

const socialUrls = {
  telegram: 'https://t.me/mobius_network',
  kakao: 'https://open.kakao.com/o/gRSkdgM',
  meetup: 'http://meetu.ps/c/3T5fw/FKt7k/f',
  twitter: 'https://twitter.com/mobius_network',
  facebook: 'https://www.facebook.com/mobiusnet',
  weibo: 'https://weibo.com/mobiuschina',
  reddit: 'https://www.reddit.com/r/MobiusNetwork/',
  github: 'https://github.com/mobius-network',
  medium: 'https://medium.com/mobius-network',
  email: 'mailto:hello@mobius.network',
};

class SocialLinks extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = {
    isWeChatModalVisible: false,
  };

  toggleWeChatModal = () =>
    this.setState({ isWeChatModalVisible: !this.state.isWeChatModalVisible });

  render() {
    const { t } = this.props;
    const { isWeChatModalVisible } = this.state;

    return (
      <Fragment>
        <ListContainer>
          <ListItem>
            <SocialLink href={socialUrls.telegram} title="Telegram">
              <FontAwesomeIcon icon={faTelegramPlane} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <KakaoTalkLink href={socialUrls.kakao} title="KakaoTalk" />
          </ListItem>

          <ListItem>
            <WeChatButton
              onClick={this.toggleWeChatModal}
              title="WeChat"
              type="button"
            >
              <FontAwesomeIcon icon={faWeixin} fixedWidth size="lg" />
            </WeChatButton>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.meetup} title="Meetup">
              <FontAwesomeIcon icon={faMeetup} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.twitter} title="Twitter">
              <FontAwesomeIcon icon={faTwitter} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.facebook} title="Facebook">
              <FontAwesomeIcon icon={faFacebook} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.weibo} title="Weibo">
              <FontAwesomeIcon icon={faWeibo} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.reddit} title="Reddit">
              <FontAwesomeIcon icon={faReddit} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.github} title="Github">
              <FontAwesomeIcon icon={faGithub} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.medium} title="Medium">
              <FontAwesomeIcon icon={faMedium} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.email}>
              <FontAwesomeIcon icon={faEnvelope} fixedWidth size="lg" />
            </SocialLink>
          </ListItem>
        </ListContainer>

        <Modal
          closeButton
          contentLabel="WeChat QR Code Modal"
          fluid
          isOpen={isWeChatModalVisible}
          onRequestClose={this.toggleWeChatModal}
          title={t('socialLinks.weChatModalTitle')}
        >
          <WeChatModalContent>
            <WeChatQrCode />
          </WeChatModalContent>
        </Modal>
      </Fragment>
    );
  }
}

export default SocialLinks;
