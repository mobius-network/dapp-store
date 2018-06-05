import styled from 'styled-components';

import { fonts, fontSizes } from 'components/shared/Styleguide';

export const Container = styled.button`
  background: ${props => props.theme.background};
  border-radius: 20px;
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40px;
  margin: 0;
  opacity: 1;
  outline: 2px;
  overflow: hidden;
  padding: 0;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    outline: 0;
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
  }
`;

export const Content = styled.div`
  align-items: center;
  background: ${props => props.theme.contentBackground};
  border-radius: 18px;
  color: ${props => props.theme.color};
  display: flex;
  flex-direction: row;
  flex: 1;
  font-family: ${fonts.control};
  font-size: ${fontSizes.default};
  font-weight: ${props => props.theme.fontWeight};
  justify-content: center;
  margin: 2px;
  padding-left: 20px;
  padding-right: 20px;
`;
