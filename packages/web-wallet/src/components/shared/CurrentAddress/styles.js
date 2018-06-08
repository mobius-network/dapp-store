import styled from 'styled-components';

import { colors, fontSizes, radius } from 'components/shared/Styleguide';

export const Container = styled.div``;

export const Info = styled.div`
  align-items: center;
  background: ${colors.bg};
  border-radius: 0 0 ${radius.medium} ${radius.medium};
  color: ${colors.textPrimary};
  display: flex;
  margin-top: -5px;
  padding: 15px 20px 10px;
`;

export const InfoIcon = styled.div`
  margin-right: 10px;
`;

export const InfoText = styled.p`
  margin: 0;
  font-size: ${fontSizes.mini};
`;
