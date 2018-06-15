import styled from 'styled-components';

import { colors, fontSizes, fonts } from 'components/shared/Styleguide';

export const Spinner = styled.div`
  color: ${colors.textSecondary};
  text-align: center;
`;

export const SpinnerIcon = styled.div`
  margin-bottom: 10px;
`;

export const SpinnerText = styled.p`
  margin: 0;
  font: ${fontSizes.default} ${fonts.default};
`;
