import styled from 'styled-components';

import { fonts, fontSizes, colors, radius } from 'components/shared/Styleguide';

export const Container = styled.div`
  margin: 0;
  position: relative;
`;

export const StyledTextarea = styled.textarea`
  background-color: ${colors.bgWhite};
  border-radius: ${radius.medium};
  border: 1px solid ${props => (props.error ? colors.error : colors.border)};
  box-sizing: border-box;
  color: ${colors.textDefault};
  display: block;
  font: ${fontSizes.formField} ${fonts.nunitoSans};
  margin: 0 0 5px;
  padding: 12px 20px;
  resize: vertical;
  width: 100%;
  min-height: 100px;

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
