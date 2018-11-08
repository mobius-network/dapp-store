import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fonts, fontSizes } from 'components/shared/Styleguide';

const linkStyles = `
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
  color: ${props => props.theme.color};
  ${linkStyles};

  &:visited {
    color: ${props => props.theme.color};
    ${linkStyles};
  }
`;

export const StyledHyperlink = styled.a`
  color: ${props => props.theme.color};
  ${linkStyles};

  &:visited {
    color: ${props => props.theme.color};
    ${linkStyles};
  }
`;
