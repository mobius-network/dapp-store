import styled from 'styled-components';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

import Icon from 'components/shared/Icon';

export const Container = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 31;
  margin-left: 16;
  margin-right: 16;
`;

export const CurrencyIcon = styled(Icon)`
  margin-right: 16.5;
`;

export const AssetInfo = styled.View``;

export const Asset = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.default};
  line-height: 24;
`;

export const Price = styled.Text`
  color: ${colors.textLight};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: 14;
`;

export const AmountInfo = styled.View`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const UsdAmount = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.roboto.bold};
  font-size: ${fontSizes.default};
  line-height: 24;
`;

export const Amount = styled.Text`
  color: ${colors.textLight};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: 14;
`;
