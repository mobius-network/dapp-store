import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

const linkStyles = `
  color: ${colors.textPrimary};
  cursor: pointer;
  display: inline-block;
  font-family: ${fonts.control};
  font-size: ${fontSizes.default};
  text-decoration: none;
  user-select: none;

  &:hover {
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
