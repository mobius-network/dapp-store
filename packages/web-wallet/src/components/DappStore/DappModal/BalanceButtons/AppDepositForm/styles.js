import styled from 'styled-components';

import TextInput from 'components/shared/TextInput';
import { fonts, fontSizes, colors } from 'components/shared/Styleguide';

export const Caption = styled.p`
  color: ${colors.textLight};
  font: ${fontSizes.mini} ${fonts.default};
  margin: 9px 0 18px;
  text-align: center;
`;

export const AmountInput = styled(TextInput)`
  margin-top: 18px;
`;
