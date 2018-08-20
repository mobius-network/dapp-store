import styled from 'styled-components';

import {
  colors,
  breakpoints,
  fontSizes,
  fonts,
  lineHeights,
} from 'components/shared/Styleguide';

export const Content = styled.form`
  @media screen and (min-width: ${breakpoints.md}) {
    width: 530px;
  }
`;

export const Header = styled.p`
  font-family: ${fonts.default};
  font-size: ${fontSizes.default};
  font-weight: 700;
  line-height: ${lineHeights.default};
  margin: 0 0 15px;
`;

export const Paragraph = styled.p`
  font-family: ${fonts.default};
  font-size: ${fontSizes.default};
  line-height: ${lineHeights.default};
  margin: 0 0 15px;
`;

export const ControlRow = styled.div`
  border-bottom: 1px solid ${colors.border};
  border-top: 1px solid ${colors.border};
  margin: 30px 0;
  padding: 15px 0;
`;

export const ActionsRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
