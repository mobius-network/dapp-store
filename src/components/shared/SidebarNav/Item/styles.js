import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { fonts, fontSizes, colors } from 'components/shared/Styleguide';

export const Container = styled.li`
  margin: 0 0 10px;
  padding: 0;
  list-style: none;

  &:last-child {
    margin: 0;
  }
`;

const linkStyles = `
  color: #4a4e67;
  display: block;
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.default};
  opacity: 1;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &.active {
    color: ${colors.textPrimary};
    font-weight: 700;
    pointer-events: none;
  }
`;

export const StyledLink = styled(NavLink)`
  ${linkStyles};

  &:visited {
    ${linkStyles};
  }
`;
