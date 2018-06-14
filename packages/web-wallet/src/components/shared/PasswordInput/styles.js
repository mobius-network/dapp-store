import styled from 'styled-components';

import { fonts, fontSizes, colors, radius } from 'components/shared/Styleguide';

export const Container = styled.div`
  margin: 0;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 0 0 5px;

  &:last-child {
    margin: 0;
  }
`;

export const Input = styled.input`
  background-color: ${colors.bgWhite};
  border-radius: ${radius.medium};
  border: 1px solid ${props => (props.error ? colors.error : colors.border)};
  box-sizing: border-box;
  color: ${colors.textDefault};
  display: block;
  font: ${fontSizes.formField} ${fonts.nunitoSans};
  height: 40px;
  margin: 0;
  padding: 0 35px 0 20px;
  width: 100%;

  &::placeholder {
    color: ${colors.textLight};
  }
`;

export const VisibilityToggle = styled.button`
  background: none;
  border: none;
  color: ${colors.textSecondary};
  cursor: pointer;
  font-size: ${fontSizes.formField};
  margin: 0;
  opacity: 0.8;
  outline: none;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
  user-select: none;

  &:hover {
    opacity: 1;
  }

  &:active {
    outline: 0;
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.error};
  font: ${fontSizes.default} ${fonts.nunitoSans};
  margin: 0;
`;
