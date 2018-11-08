import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

const itemStyles = `
  background: ${colors.bgWhite};
  border: none;
  color: ${colors.textPrimary};
  cursor: pointer;
  display: block;
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.default};
  margin: 0;
  opacity: 1;
  outline: 0;
  overflow: hidden;
  padding: 5px 20px;
  text-align: left;
  text-decoration: none;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background: ${colors.bgLight};
    opacity: 0.8;
    text-decoration: none;
  }

  &:active {
    outline: 0;
  }

  &:disabled {
    background: ${colors.bgLight};
    color: ${colors.textLight}
    opacity: 0.8;
    pointer-events: none;
  }
`;

export const LinkItem = styled(Link)`
  ${itemStyles};

  &:visited {
    ${itemStyles};
  }
`;

export const ButtonItem = styled.button`
  width: 100%;
  ${itemStyles};
`;
