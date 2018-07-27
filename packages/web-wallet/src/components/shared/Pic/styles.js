import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const themes = {
  default: {
    height: '128px',
    placeholderFontSize: '50px',
    width: '128px',
  },
  small: {
    height: '54px',
    placeholderFontSize: '21px',
    width: '54px',
  },
};

export const Container = styled.div`
  border-radius: 8px;
  height: ${props => props.theme.height};
  overflow: hidden;
  position: relative;
  width: ${props => props.theme.width};
`;

export const Image = styled.img`
  border: none;
  left: 50%;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Placeholder = styled.div`
  align-items: center;
  background-color: ${colors.bgWhite};
  border-radius: 8px;
  border: 1px solid ${colors.border};
  box-sizing: border-box;
  color: #e7e3e3;
  display: flex;
  font-size: ${props => props.theme.placeholderFontSize};
  height: 100%;
  justify-content: center;
  width: 100%;
`;
