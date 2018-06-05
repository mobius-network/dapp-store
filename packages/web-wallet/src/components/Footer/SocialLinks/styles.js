import styled from 'styled-components';

import { colors, media } from 'components/shared/Styleguide';
import Link from 'components/shared/Link';

import kakaoTalkIcon from './images/kakao.svg';

export const ListContainer = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media screen and (min-width: ${media.sm}) {
    justify-content: flex-end;
  }
`;

export const ListItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const socialLinkStyles = `
  color: ${colors.textLight};
  cursor: pointer;
  height: 10px;
  line-height: 10px;
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
  width: 10px;
  height: 10px;

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
