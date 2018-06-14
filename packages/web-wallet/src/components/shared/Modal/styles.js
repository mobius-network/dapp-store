import styled from 'styled-components';
import ReactModal from 'react-modal';

import {
  breakpoints,
  colors,
  radius,
  shadows,
} from 'components/shared/Styleguide';

export const StyledReactModal = styled(ReactModal)`
  bottom: auto;
  box-sizing: border-box;
  left: auto;
  outline: 0;
  padding: 0 12px;
  position: absolute;
  right: auto;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => (props.fluid ? 'auto' : breakpoints.md)};
  }
`;

export const Content = styled.div`
  background: ${colors.bgWhite};
  border-radius: ${radius.default};
  box-shadow: ${shadows.modal};
  padding: 30px;
`;
