import styled from 'styled-components';

import Link from 'components/shared/Link';
import { fontSizes } from 'components/shared/Styleguide';

export const ActionsRow = styled.div`
  margin-top: 25px;
`;

export const StyledLink = styled(Link)`
  font-size: ${fontSizes.formField};

  &:visited {
    font-size: ${fontSizes.formField};
  }
`;
