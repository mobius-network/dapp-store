import styled from 'styled-components';

import Pic from 'components/shared/Pic';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  colors,
  breakpoints,
  fontSizes,
  fonts,
  lineHeights,
  radius,
} from 'components/shared/Styleguide';

export const Content = styled.div`
  @media screen and (min-width: ${breakpoints.md}) {
    width: ${breakpoints.md};
  }
`;

export const AppHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 40px;
`;

export const AppPic = styled(Pic)`
  margin-right: 20px;
  width: 90px;
  height: 90px;
`;

export const AppDetails = styled.div`
  font-family: ${fonts.default};
  flex: 1;
`;

export const AppName = styled.p`
  font-size: ${fontSizes.subHeading};
  margin: 0;
  font-weight: 700;
`;

export const AppTagline = styled.p`
  font-size: ${fontSizes.default};
  margin: 5px 0;
  color: ${colors.textSecondary};
`;

export const Desc = styled.p`
  border-top: 1px solid ${colors.border};
  font: ${fontSizes.paneCaption} / ${lineHeights.default} ${fonts.default};
  margin: 0 20px 0 0;
  padding: 30px 0 0;
`;

export const ButtonRow = styled.div`
  margin: 0 0 10px;
`;

export const AppBalance = styled.p`
  font: 13px ${fonts.default};
  color: ${colors.textSecondary};
  margin: 0;
  text-align: center;
`;

export const AppBalanceAmount = styled.span`
  color: ${colors.textPrimary};
  font-weight: 700;
`;

export const AppLinks = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid ${colors.border};
`;

const appLinkStyles = `
  border: none;
  box-shadow: 0 15px 35px 0 rgba(239,123,100,0.06), 0 5px 15px 0 rgba(0,0,0,0.07);
  outline: 0;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const AppLink = styled.a`
  ${appLinkStyles};
  background: ${colors.bg};
  border-radius: ${radius.medium};
  cursor: pointer;
  display: block;
  font-family: ${fonts.default};
  margin: 0 0 15px;
  opacity: 1;
  padding: 10px 40px 10px 15px;
  transition: opacity 0.3s;
  position: relative;

  &:last-child {
    margin: 0;
  }

  &:visited {
    ${appLinkStyles};
  }
`;

export const AppLinkTitle = styled.span`
  color: ${colors.textSecondary};
  display: block;
  font-size: 15px;
  font-weight: 700;
  margin: 0;
`;

export const AppLinkUrl = styled.span`
  color: ${colors.textPrimary};
  display: block;
  font-size: 13px;
  margin: 10px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AppLinkArrow = styled(FontAwesomeIcon)`
  color: ${colors.textSecondary};
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
