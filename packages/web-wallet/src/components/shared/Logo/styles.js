import styled from 'styled-components';

import Link from 'components/shared/Link';

import logoImage from './images/logo.png';

export const LogoLink = styled(Link)`
  background-image: url(${logoImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 50px;

  &:hover {
    text-decoration: none;
  }
`;
