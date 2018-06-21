import styled from 'styled-components';

import { colors, fonts } from 'components/shared/Styleguide';

export const Container = styled.div``;

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
