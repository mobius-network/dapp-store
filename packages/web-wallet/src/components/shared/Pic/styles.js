import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const Container = styled.div`
  border-radius: 8px;
  height: 128px;
  overflow: hidden;
  position: relative;
  width: 128px;
`;

export const Image = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Placeholder = styled.div`
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  box-sizing: border-box;
  color: #e7e3e3;
  display: flex;
  font-size: 50px;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
