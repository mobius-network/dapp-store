import styled from 'styled-components';

import Pic from 'components/shared/Pic';
import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

export const Container = styled.div`
  border-right: 1px solid ${colors.border};

  border-bottom: 1px solid ${colors.border};
  width: 33.33%;
  padding: 30px 50px;
  text-align: center;
  box-sizing: border-box;

  &:nth-child(3n + 1) {
    border-left: 1px solid ${colors.border};
  }
`;

export const AppPic = styled(Pic)`
  width: 90px;
  height: 90px;
  margin: 0 auto 10px;
`;

export const AppName = styled.p`
  font-size: ${fontSizes.sectionHeading};
  font-family: ${fonts.default};
  color: ${colors.textDefault};
  font-weight: 700;
  margin: 0 0 5px;
  text-align: center;
`;

export const AppBalance = styled.p`
  font-size: ${fontSizes.default};
  font-family: ${fonts.default};
  color: ${colors.textSecondary};
  margin: 0 0 20px;
  text-align: center;
`;

export const AppBalanceItem = styled.span`
  padding: 0 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
