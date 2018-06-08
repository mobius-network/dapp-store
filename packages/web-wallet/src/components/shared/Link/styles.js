import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

const linkStyles = `
  color: ${colors.textPrimary};
  cursor: pointer;
  display: inline-block;
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.default};
  opacity: 1;
  outline: 0;
  text-decoration: none;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  ${linkStyles} &:visited {
    ${linkStyles};
  }
`;

export const StyledHyperlink = styled.a`
  ${linkStyles} &:visited {
    ${linkStyles};
  }
`;
