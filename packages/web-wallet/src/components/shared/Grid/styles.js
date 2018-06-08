import styled from 'styled-components';

import { breakpoints } from 'components/shared/Styleguide';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  width: 100%;
  min-width: ${breakpoints.sm};
`;
