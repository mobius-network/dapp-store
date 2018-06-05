import styled from 'styled-components';
import {
  radius,
  shadows,
  fonts,
  gradients,
} from 'components/shared/Styleguide';

export const Container = styled.div`
  background: ${props => props.theme.background};
  border-radius: ${radius.default};
  box-shadow: ${shadows.pane};
  font-family: ${fonts.default};
  position: relative;
`;

export const Gradient = styled.div`
  background: ${gradients.full};
  border-radius: ${radius.default} ${radius.default} 0 0;
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Title = styled.p``;
