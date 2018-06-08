import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  radius,
} from 'components/shared/Styleguide';

export const Container = styled.div``;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 5px;
`;

export const Caption = styled.p`
  color: ${colors.textSecondary};
  font-size: ${fontSizes.default};
  line-height: ${lineHeights.default};
  margin: 0 0 20px;
`;

export const Price = styled.p`
  color: ${colors.textLight};
  font-size: ${fontSizes.default};
  margin: 0;
  padding-left: 5px;
`;

export const InputContainer = styled.div`
  padding-right: 5px;
  position: relative;
  max-width: 185px;

  &:after {
    color: ${colors.textPrimary};
    content: 'MOBI';
    font-weight: 700;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  background-color: ${colors.bgWhite};
  border-radius: ${radius.medium};
  border: 1px solid ${colors.border};
  box-sizing: border-box;
  color: ${colors.textDefault};
  display: block;
  font: 20px ${fonts.nunitoSans};
  height: 50px;
  margin: 0;
  padding: 0 15px;
  width: 100%;
  appearance: textfield;

  &::placeholder {
    color: ${colors.textLight};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 31px;
`;
