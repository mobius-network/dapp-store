import styled from 'styled-components';

import { colors, breakpoints } from 'components/shared/Styleguide';
import Link from 'components/shared/Link';

import kakaoTalkIcon from './images/kakao.svg';
import weChatQrCodeImage from './images/wechat_qr.jpg';

export const ListContainer = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
  }
`;

export const ListItem = styled.li`
  margin: 0 10px 10px 0;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
  }
`;

const socialLinkStyles = `
  color: ${colors.textWhite};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  opacity: 0.8;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    opacity: 1;
  }
`;

export const SocialLink = styled(Link)`
  ${socialLinkStyles} &:visited {
    ${socialLinkStyles};
  }
`;

export const KakaoTalkLink = styled(Link)`
  ${socialLinkStyles};
  background-image: url(${kakaoTalkIcon});
  background-position: center;
  background-repeat: no-repeat;
  height: 17px;
  vertical-align: bottom;
  width: 17px;

  &:visited {
    ${socialLinkStyles};
  }
`;

export const WeChatButton = styled.button`
  ${socialLinkStyles};
  background: none;
  border: none;
  box-shadow: none;
  margin: 0;
  outline: 0;
  padding: 0;
`;

export const WeChatModalContent = styled.div`
  padding: 20px;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 350px;
  }
`;

export const WeChatQrCode = styled.div`
  background-image: url(${weChatQrCodeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 344px;
  margin: 0 auto;
  max-width: 344px;
`;
