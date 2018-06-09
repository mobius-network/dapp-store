import styled from 'styled-components';

import Pic from 'components/shared/Pic';
import {
  colors,
  breakpoints,
  fontSizes,
  fonts,
  lineHeights,
} from 'components/shared/Styleguide';

export const Content = styled.div`
  @media screen and (min-width: ${breakpoints.md}) {
    width: ${breakpoints.md};
  }
`;

export const AppDetails = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 40px;
`;

export const AppPic = styled(Pic)`
  margin-right: 20px;
  width: 90px;
  height: 90px;
`;

export const AppName = styled.p`
  font-size: 20px;
  margin: 0;
  flex: 1;
  font-weight: 700;
  font: 700 ${fontSizes.subHeading} ${fonts.default};
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
