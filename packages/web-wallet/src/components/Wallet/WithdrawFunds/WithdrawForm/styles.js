import styled from 'styled-components';

import { colors, fontSizes } from 'components/shared/Styleguide';

export const FormFields = styled.div`
  margin-bottom: 50px;
`;

export const AvailableBalance = styled.p`
  font-size: ${fontSizes.default};
  color: ${colors.textLight};
  margin: 0;
`;

export const FormActions = styled.div`
  border-top: 1px solid ${colors.border};
  padding: 25px;
  display: flex;
`;
