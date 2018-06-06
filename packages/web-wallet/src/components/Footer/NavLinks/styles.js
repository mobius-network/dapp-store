import styled from 'styled-components';

import { breakpoints } from 'components/shared/Styleguide';

export const ListContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: start;
  }
`;

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  margin-right: 25px;
  padding: 0;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-right: 35px;
  }

  &:last-child {
    margin-right: 0;
  }
`;
