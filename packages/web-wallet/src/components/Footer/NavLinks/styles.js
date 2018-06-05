import styled from 'styled-components';

import Link from 'components/shared/Link';
import { media } from 'components/shared/Styleguide';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${media.sm}) {
    justify-content: start;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 25px;

  @media screen and (min-width: ${media.sm}) {
    margin-right: 35px;
  }

  &:last-child {
    margin-right: 0;
  }
`;
