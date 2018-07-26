import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { fonts, fontSizes, colors, radius } from 'components/shared/Styleguide';

export const HiddenCheckbox = styled.input`
  opacity: 0;
  position: absolute;
`;

export const Label = styled.label`
  align-items: flex-start;
  color: ${colors.textDefault};
  display: flex;
  flex-direction: row;
  margin: 0 0 5px;
  position: relative;

  &:last-child {
    margin: 0;
  }
`;

export const Control = styled.span`
  background: ${colors.bgWhite};
  border-radius: ${radius.small};
  border: 1px solid ${props => (props.error ? colors.error : colors.border)};
  cursor: pointer;
  height: 28px;
  margin: 0 15px 0 0;
  position: relative;
  width: 28px;
`;

export const ControlIcon = styled(FontAwesomeIcon)`
  color: ${colors.textPrimary};
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.span`
  flex: 1;
  font-family: ${fonts.default};
  font-size: ${fontSizes.formField};
  line-height: 1;
  padding: 7px 0;
`;

export const ErrorMessage = styled.p`
  color: ${colors.error};
  font: ${fontSizes.default} ${fonts.nunitoSans};
  margin: 0;
`;
