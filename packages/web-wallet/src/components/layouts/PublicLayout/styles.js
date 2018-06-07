import styled from 'styled-components';

import { breakpoints } from 'components/shared/Styleguide';

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
