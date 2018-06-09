import styled from 'styled-components';

import { breakpoints, colors, fonts } from 'components/shared/Styleguide';
import Link from 'components/shared/Link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 60px;
  }
`;

export const Menu = styled.div``;

export const MenuTitle = styled.p`
  font: 700 12px ${fonts.default};
  color: ${colors.textLight};
  margin: 0 0 10px;
`;

export const MenuItem = styled(Link)`
  margin: 0 0 10px;
  display: block;
  color: #4a4e67;

  &:visited {
    color: #4a4e67;
  }
`;
