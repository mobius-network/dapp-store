import styled from 'styled-components';

import { colors, fonts } from 'components/shared/Styleguide';

export const Container = styled.div``;

export const TabButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const TabButton = styled.button`
  background: #fafafa;
  border-bottom: 1px solid ${colors.border};
  border-left: none;
  border-right: 1px solid ${colors.border};
  border-top: none;
  box-shadow: none;
  box-sizing: border-box;
  color: ${colors.textSecondary};
  cursor: pointer;
  flex: ${props => (props.fluid ? '1' : '0 1 auto')};
  font-family: ${fonts.default};
  font-size: 15px;
  font-weight: 700;
  height: 50px;
  margin: 0;
  outline: 0;
  text-align: center;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    color: ${colors.textDefault};
  }

  &:disabled {
    background: ${colors.bgWhite};
    border-bottom: 1px solid transparent;
    color: ${colors.textDefault};
    cursor: default;
    pointer-events: none;
  }

  &:last-child {
    border-right: ${props => props.fluid ? 'none' : `1px solid ${colors.border}`};
  }
`;
