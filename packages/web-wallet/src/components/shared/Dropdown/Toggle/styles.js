import styled from 'styled-components';

import { fonts, fontSizes, radius } from 'components/shared/Styleguide';

export const ToggleButton = styled.button`
  align-items: center;
  background: ${props => props.theme.background};
  border-radius: ${radius.big};
  border: 1px solid ${props => props.theme.borderColor};
  box-shadow: none;
  color: ${props => props.theme.color};
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 0 20px;
  text-decoration: none;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }

  &:active {
    outline: 0;
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
  }
`;

export const Icon = styled.span``;

export const Title = styled.span`
  flex: 1;
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.default};
  margin-right: 10px;
`;
