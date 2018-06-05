import styled from 'styled-components';

import { media } from 'components/shared/Styleguide';

export const Content = styled.div`
  margin: 30px auto;

  @media screen and (min-width: ${media.sm}) {
    margin: 60px auto;
  }
`;
