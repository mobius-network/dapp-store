import styled from 'styled-components';
import ReactModal from 'react-modal';

import {
  breakpoints,
  colors,
  radius,
  shadows,
  fonts,
  fontSizes,
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
  position: relative;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${colors.border};
  padding: 20px 30px;
`;

export const HeaderTitle = styled.p`
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: ${fontSizes.heading};
  font-weight: 300;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: #c8c8c8;
  cursor: pointer;
  font-size: 20px;
  line-height: 30px;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 0;
  position: absolute;
  right: 30px;
  top: 20px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Body = styled.div`
  padding: 30px;
`;
