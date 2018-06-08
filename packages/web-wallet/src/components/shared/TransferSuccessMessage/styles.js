import styled from 'styled-components';

import { colors, fontSizes, fonts } from 'components/shared/Styleguide';

export const Container = styled.div`
  font-family: ${fonts.default};
  text-align: center;
`;

export const AssetValue = styled.span`
  color: ${colors.textPrimary};
  font-size: 92px;
  line-height: 1;
`;

export const AssetName = styled.span`
  color: ${colors.textDefaul};
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
`;

export const Message = styled.p`
  color: ${colors.textSecondary};
  font-size: ${fontSizes.default};
  margin: 5px 0 0;
`;
