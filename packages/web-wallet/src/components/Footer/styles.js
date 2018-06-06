import styled from 'styled-components';

import {
  colors,
  fontSizes,
  gradients,
  breakpoints,
} from 'components/shared/Styleguide';

export const MainRow = styled.div`
  background: ${colors.bg};
  padding: 15px 0;
`;

export const SecondaryRow = styled.div`
  background: ${gradients.full};
  padding: 8px 0;
`;

export const CopyrightText = styled.p`
  font-size: ${fontSizes.small};
  color: ${colors.textLight};
  margin: 0 0 5px;
  padding: 0;
  text-align: center;

  @media screen and (min-width: ${breakpoints.md}) {
    text-align: left;
    margin: 0;
  }
`;
