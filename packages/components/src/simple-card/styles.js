import { Text, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin-bottom: 12px;
  border-width: 1px;
  background-color: #fff;
  border-color: ${props => props.bordercolor};
`;

export const TitleView = styled(View)`
  padding: 12px;
  background-color: ${props => props.backgroundcolor};
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.color};
`;

export const ContentView = styled(View)`
  padding: 12px;
`;
