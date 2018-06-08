import styled from 'styled-components';

import { fonts, fontSizes, colors } from 'components/shared/Styleguide';

export const Container = styled.div`
  margin: 0 0 20px;

  &:last-child {
    margin: 0;
  }
`;

export const Label = styled.p`
  color: ${colors.textDefault};
  font: ${fontSizes.formField} ${fonts.nunitoSans};
  margin: 0 0 5px;
`;

export const Caption = styled.p`
  color: ${colors.textLight};
  font: ${fontSizes.default} ${fonts.default};
  margin: 0 0 15px;
`;
