import styled from 'styled-components';

import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  radius,
} from 'components/shared/Styleguide';

export const SectionHeading = styled.p`
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: ${fontSizes.heading};
  font-weight: 300;
  margin: 0 0 10px;
`;

export const SectionDesc = styled.p`
  color: ${colors.textSecondary};
  font-family: ${fonts.default};
  font-size: 15px;
  margin: 0 0 20px;
`;

export const VideoContentContainer = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 60px;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0 -8px;
  padding: 0;
`;

export const LinkContainer = styled.li`
  list-style: none;
  margin: 0;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 50%;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    width: 33%;
  }
`;

const linkItemStyles = `
  border: none;
  box-shadow: 0 15px 35px 0 rgba(239,123,100,0.06), 0 5px 15px 0 rgba(0,0,0,0.07);
  outline: 0;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const LinkItem = styled.a`
  ${linkItemStyles};
  background: ${colors.bg};
  border-radius: ${radius.medium};
  cursor: pointer;
  display: block;
  font-family: ${fonts.default};
  margin: 0;
  opacity: 1;
  padding: 20px 16px;
  position: relative;
  transition: opacity 0.3s;

  &:last-child {
    margin: 0;
  }

  &:visited {
    ${linkItemStyles};
  }
`;

export const LinkItemTitle = styled.span`
  color: ${colors.textSecondary};
  display: block;
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 10px;
`;

export const LinkItemUrl = styled.span`
  color: ${colors.textSecondary};
  display: block;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
