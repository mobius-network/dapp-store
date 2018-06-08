import styled from 'styled-components';

import { colors, fonts } from 'components/shared/Styleguide';

export const Container = styled.div`
  font-family: ${fonts.default};
  text-align: center;
`;

export const AssetValue = styled.span`
  color: ${colors.textPrimary};
  font-size: 92px;
`;

export const AssetName = styled.span`
  color: ${colors.textDefaul};
  font-size: 26px;
  font-weight: 700;
  margin-left: 7px;
`;

export const Message = styled.p`
  color: ${colors.textSecondary};
  font-size: 16px;
  margin: 5px 0 0;
`;
