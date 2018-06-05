import styled from 'styled-components';

import { media } from 'components/shared/Styleguide';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 10px 0;
`;

export const ListContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  margin-right: 25px;
  padding: 0;

  @media screen and (min-width: ${media.sm}) {
    margin-right: 35px;
  }

  &:last-child {
    margin-right: 0;
  }
`;
