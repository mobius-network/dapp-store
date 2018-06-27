import styled from 'styled-components';

import Button from 'components/shared/Button';
import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  lineHeights,
} from 'components/shared/Styleguide';

export const Content = styled.div`
  @media screen and (min-width: ${breakpoints.md}) {
    width: 450px;
  }
`;

export const Message = styled.p`
  border-bottom: 1px solid ${colors.border};
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: ${fontSizes.default};
  line-height: ${lineHeights.default};
  margin: 0 0 30px;
  padding-bottom: 30px;
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    width: 450px;
  }
`;

export const Action = styled(Button)`
  margin: 0 0 10px;
  width: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    margin: 0;
    width: auto;
  }
`;
