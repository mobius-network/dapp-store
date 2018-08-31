import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const Container = styled.View`
  align-items: stretch;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.View`
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Action = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.title};
  font-weight: bold;
  margin-bottom: 10;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${colors.textSecondary};
  font-family: ${fonts.helveticaNeue.regular};
  font-size: ${fontSizes.default};
  line-height: ${helpers.calculateLineHeight(fontSizes.default)};
  margin-bottom: 50;
  text-align: center;
`;
