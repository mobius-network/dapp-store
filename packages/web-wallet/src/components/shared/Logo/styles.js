import styled from 'styled-components';

import Link from 'components/shared/Link';
import { colors, fonts } from 'components/shared/Styleguide';

import logoImage from './images/logo.png';

export const LogoLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;

  &:hover {
    text-decoration: none;
  }
`;

export const LogoImage = styled.div`
  background-image: url(${logoImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 50px;
`;

export const LogoName = styled.span`
  color: ${colors.textPrimary};
  font-family: ${fonts.montserrat};
  font-size: 15px;
  margin-left: 10px;
`;
