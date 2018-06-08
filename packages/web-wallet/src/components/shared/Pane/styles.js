import styled from 'styled-components';
import {
  radius,
  fonts,
  gradients,
  breakpoints,
} from 'components/shared/Styleguide';

export const Container = styled.div`
  background: ${props => props.theme.background};
  border-radius: ${radius.default};
  box-shadow: ${props => props.theme.shadow};
  font-family: ${fonts.default};
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  text-align: left;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;

    @media screen and (min-width: ${breakpoints.md}) {
      margin-bottom: 0;
    }
  }
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
