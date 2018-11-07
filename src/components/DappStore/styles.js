import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {
  colors,
  fonts,
  fontSizes,
  breakpoints,
  lineHeights,
  radius,
} from 'components/shared/Styleguide';
import AdditionalInfo from 'components/shared/AdditionalInfo';

import image from './images/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -10px;
`;

export const HeaderContainer = styled.div`
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 100px;
  padding-top: 10px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 80px;
    height: 477px;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    background-position: left;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: ${breakpoints.md}) {
    padding-top: 30px;
    padding-right: 100px;
  }
`;

export const Title = styled.h1`
  color: ${colors.textDefault};
  font: 300 ${fontSizes.mainHeading} ${fonts.default};
  margin: 0 0 10px;
`;

export const UserWalkThroughIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
`;

export const Subtitle = styled.h2`
  color: #868da7;
  font: ${fontSizes.subHeading} / ${lineHeights.default} ${fonts.default};
  margin: 0;
`;

export const Submit = styled(AdditionalInfo)`
  margin-bottom: 30px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 60px;
  }
`;

export const DevWalkThroughButton = styled.button`
  border-radius: ${radius.medium};
  border: none;
  box-shadow: none;
  cursor: pointer;
  margin-bottom: 20px;
  outline: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;

  & > div {
    pointer-events: none;
  }
`;

export const SubmitTitle = styled.p`
  font-size: ${fontSizes.heading};
  margin: 0 0 15px;
  font-weight: 700;
  font-family: ${fonts.default};
  color: ${colors.textDefault};
`;

export const SubmitText = styled.p`
  font-size: ${fontSizes.paneCaption};
  margin: 0 0 15px;
  line-height: ${lineHeights.default};
  font-family: ${fonts.default};
  color: ${colors.textSecondary};
`;
