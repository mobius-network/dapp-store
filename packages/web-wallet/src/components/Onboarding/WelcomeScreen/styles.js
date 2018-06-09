import styled from 'styled-components';

import Pane from 'components/shared/Pane';
import {
  colors,
  fonts,
  fontSizes,
  gradients,
  radius,
} from 'components/shared/Styleguide';
import image from './images/logo.png';

export const Container = styled(Pane)``;

export const Header = styled.div`
  background: ${gradients.full};
  border-radius: ${radius.default} ${radius.default} 0 0;
  color: ${colors.textWhite};
  padding: 60px;
`;

export const HeaderLogo = styled.div`
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 39px;
  margin-bottom: 20px;
  width: 78px;
`;

export const HeaderTitle = styled.p`
  font-size: ${fontSizes.paneHeading};
  line-height: 1.2;
  margin-bottom: 5px;
  margin-top: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderCaption = styled.p`
  font-family: ${fonts.default};
  font-size: ${fontSizes.paneCaption};
  line-height: 1.6;
  margin: 0;
`;

export const Content = styled(Pane.Section)``;

export const ContentSteps = styled.ul`
  list-style: none;
  margin: 0 0 50px;
  padding: 0;
`;

export const ContentStep = styled.li`
  align-items: center;
  display: flex;
  margin: 0 0 30px;
`;

export const ContentStepIcon = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${colors.textPrimary};
  color: ${colors.textPrimary};
  display: flex;
  height: 35px;
  justify-content: center;
  margin-right: 20px;
  min-width: 35px;
  font-weight: bold;
`;

export const ContentStepText = styled.p`
  color: ${colors.textDefault};
  font-size: ${fontSizes.sectionHeading};
  margin: 0;
`;
