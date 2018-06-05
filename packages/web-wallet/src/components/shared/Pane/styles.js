import styled from 'styled-components';
import {
  radius,
  shadows,
  fonts,
  gradients,
  media,
} from 'components/shared/Styleguide';

export const Container = styled.div`
  background: ${props => props.theme.background};
  border-radius: ${radius.default};
  box-shadow: ${shadows.pane};
  font-family: ${fonts.default};
  margin-bottom: 20px;
  position: relative;
  text-align: left;

  @media screen and (min-width: ${media.sm}) {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;

    @media screen and (min-width: ${media.sm}) {
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
