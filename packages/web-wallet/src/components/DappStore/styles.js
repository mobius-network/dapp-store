import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  breakpoints,
  lineHeights,
} from 'components/shared/Styleguide';
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
`;

export const TitleContainer = styled.div`
  margin-bottom: 60px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 100px;
  }
`;

export const Title = styled.h1`
  color: ${colors.textDefault};
  font: 300 ${fontSizes.mainHeading} ${fonts.default};
  margin: 0 0 10px;
`;

export const Subtitle = styled.h2`
  color: #868da7;
  font: ${fontSizes.subHeading} / ${lineHeights.default} ${fonts.default};
  margin: 0;
`;
