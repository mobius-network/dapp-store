import styled from 'styled-components';

import {
  colors,
  fontSizes,
  gradients,
  breakpoints,
} from 'components/shared/Styleguide';

export const MainRow = styled.div`
  align-items: center;
  background: ${colors.bg};
  display: flex;
  min-height: 30px;
  padding: 15px 0;
`;

export const SecondaryRow = styled.div`
  background: ${gradients.full};
  padding: 8px 0;
`;

export const CopyrightText = styled.p`
  color: ${colors.textWhite};
  font-size: ${fontSizes.small};
  margin: 0 0 5px;
  padding: 0;
  text-align: center;

  @media screen and (min-width: ${breakpoints.md}) {
    margin: 0;
    text-align: left;
  }
`;
