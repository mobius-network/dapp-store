import styled from 'styled-components';

import {
  fonts, fontSizes, colors, radius,
} from 'components/shared/Styleguide';

export const Container = styled.div`
  margin: 0;
`;

export const Input = styled.input`
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
`;

export const Label = styled.label`
  align-items: center;
  background-color: ${colors.bgWhite};
  border-radius: ${radius.medium};
  border: 1px solid ${props => (props.error ? colors.error : colors.border)};
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
  margin: 0 0 5px;
  padding: 0 5px 0 20px;
  position: relative;
  width: 100%;
`;

export const LabelText = styled.span`
  color: ${props => props.showPlaceholder ? colors.textLight : colors.textDefault};
  flex: 1;
  font: ${fontSizes.formField} ${fonts.nunitoSans};
  margin-right: 20px;
  overflow: hidden;
  white-space: nowrap;
`;

export const LabelButton = styled.span`
  background: #f7f7f7;
  border-radius: ${radius.small};
  border: 1px solid ${colors.border};
  color: ${colors.textLight};
  cursor: pointer;
  font-size: ${fontSizes.default};
  height: 30px;
  line-height: 30px;
  margin: 0;
  opacity: 1;
  padding: 0 15px;
  transition: 0.3s;
  user-select: none;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.error};
  font: ${fontSizes.default} ${fonts.nunitoSans};
  margin: 0;
`;
