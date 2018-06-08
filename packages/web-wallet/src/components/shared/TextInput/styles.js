import styled from 'styled-components';

import { fonts, fontSizes, colors, radius } from 'components/shared/Styleguide';

export const Container = styled.div`
  margin: 0;
`;

export const Input = styled.input`
  background-color: ${colors.bgWhite};
  border-radius: ${radius.medium};
  border: 1px solid ${props => (props.error ? colors.error : colors.border)};
  color: ${colors.textDefault};
  display: block;
  width: 100%;
  font: ${fontSizes.formField} ${fonts.nunitoSans};
  height: 40px;
  margin: 0 0 5px;
  box-sizing: border-box;
  padding: 0 20px;

  &::placeholder {
    color: ${colors.textLight};
  }

  &:last-child {
    margin: 0;
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.error};
  font: ${fontSizes.default} ${fonts.nunitoSans};
  margin: 0;
`;
