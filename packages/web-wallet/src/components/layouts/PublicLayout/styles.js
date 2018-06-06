import styled from 'styled-components';

import { breakpoints } from 'components/shared/Styleguide';

export const Content = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 60px;
  }
`;
