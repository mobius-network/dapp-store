import styled from 'styled-components';

import {
  colors,
  fontSizes,
  gradients,
  media,
} from 'components/shared/Styleguide';

export const MainRow = styled.div`
  background: ${colors.bg};
  padding: 15px 0;
`;

export const SecondaryRow = styled.div`
  background: ${gradients.full};
  padding: 5px 0;
`;

export const CopyrightText = styled.p`
  font-size: ${fontSizes.small};
  color: ${colors.textLight};
  margin: 0 0 5px;
  padding: 0;
  text-align: center;

  @media screen and (min-width: ${media.sm}) {
    text-align: left;
    margin: 0;
  }
`;
