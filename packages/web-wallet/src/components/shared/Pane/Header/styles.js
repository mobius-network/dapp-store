import styled from 'styled-components';
import { fonts, fontSizes, colors } from 'components/shared/Styleguide';

export const Caption = styled.p`
  color: ${colors.textSecondary};
  font-family: ${fonts.default};
  font-size: ${fontSizes.paneCaption};
  margin: 0;
`;

export const Container = styled.div`
  border-bottom: 1px solid ${colors.border};
  padding: ${props => props.theme.headerPadding};

  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.p`
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: ${props => props.theme.headerFontSize};
  font-weight: 700;
  margin-bottom: ${props => props.theme.headerSpacing};
  margin-top: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;
