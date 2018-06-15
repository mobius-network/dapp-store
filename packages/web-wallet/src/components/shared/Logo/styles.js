import styled from 'styled-components';

import Link from 'components/shared/Link';
import { colors, fonts } from 'components/shared/Styleguide';

import image from './images/logo.png';

export const LogoLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position: relative;

  &:hover {
    text-decoration: none;
  }
`;

export const LogoImage = styled.div`
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 18px;
  width: 38px;
`;

export const LogoName = styled.span`
  color: ${colors.textPrimary};
  font-family: ${fonts.montserrat};
  font-size: 15px;
  margin-left: 10px;
`;

export const LogoBetaShield = styled.span`
  color: ${colors.textLight};
  font-family: ${fonts.montserrat};
  font-size: 10px;
  margin-top: -13px;
  padding: 0 3px;

  ${props =>
    props.withTestNetShield &&
    `
    &:after {
      color: ${colors.error};
      content: 'TESTNET';
      font-size: 10px;
      font-weight: 700;
      padding: 0 3px;
    }
  `};
`;
