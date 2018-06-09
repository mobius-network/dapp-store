import styled from 'styled-components';

import {
  colors,
  fontSizes,
  fonts,
  lineHeights,
  shadows,
  radius,
} from 'components/shared/Styleguide';
import Pic from 'components/shared/Pic';

export const Container = styled.div`
  background: ${colors.bgWhite};
  cursor: pointer;
  padding: 25px;
  display: flex;
  margin-bottom: 25px;
  border-radius: ${radius.default};
  box-shadow: ${shadows.pane};
`;

export const AppPic = styled(Pic)`
  margin-right: 30px;
`;

export const AppDetails = styled.div`
  flex: 1;
  font-family: ${fonts.nunitoSans};
`;

export const AppName = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.textDefault};
  margin: 0 0 10px;
`;

export const AppDesc = styled.p`
  font-size: ${fontSizes.paneCaption};
  line-height: ${lineHeights.default};
  margin: 0;
`;
