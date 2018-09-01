import styled from 'styled-components';

import { colors } from 'components/shared/Styleguide';

export const LoadingIconView = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: colors.textPrimary,
  size: 'large',
})``;

export const Content = styled.View`
  align-items: stretch;
  flex-direction: column;
`;
