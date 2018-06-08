import styled from 'styled-components';

import { colors, radius } from 'components/shared/Styleguide';

export const Container = styled.div`
  background-color: ${colors.bgWhite};
  border-radius: ${radius.medium};
  border: 1px solid ${props => (props.error ? colors.error : colors.border)};
  box-sizing: border-box;
  display: block;
  display: flex;
  flex-flow: row nowrap;
  min-height: 40px;
  padding: 8px 10px 8px 20px;
  position: relative;
  position: relative;
  width: 100%;
`;

export const Text = styled.p`
  color: ${colors.textDefault};
  flex: 1;
  font-size: 13px;
  margin: 0 10px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CopyButton = styled.button`
  background: none;
  border: none;
  color: ${colors.textPrimary};
  cursor: pointer;
  font-size: 20px;
  height: 20px;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 0;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
