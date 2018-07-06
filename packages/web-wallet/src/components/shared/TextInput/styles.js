import styled from 'styled-components';

import { fonts, fontSizes, colors, radius } from 'components/shared/Styleguide';

export const themes = {
  primary: {
    borderRadius: radius.medium,
    height: '40px',
    padding: '0 20px',
  },
  innerLabel: {
    borderRadius: radius.default,
    height: '53px',
    padding: '0 65px 0 20px',
  },
};

export const Container = styled.div`
  margin: 0;
  position: relative;
`;

export const Input = styled.input`
  background-color: ${colors.bgWhite};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => (props.error ? colors.error : colors.border)};
  color: ${colors.textDefault};
  display: block;
  width: 100%;
  font: ${fontSizes.formField} ${fonts.nunitoSans};
  height: ${props => props.theme.height};
  margin: 0 0 5px;
  box-sizing: border-box;
  padding: ${props => props.theme.padding};

  &::placeholder {
    color: ${colors.textLight};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &:last-child {
    margin: 0;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${colors.error};
  font: ${fontSizes.default} ${fonts.nunitoSans};
`;

export const InnerLabel = styled.p`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  color: ${colors.textPrimary};
  font: ${fontSizes.formField} ${fonts.default};
  font-weight: bold;
`;
