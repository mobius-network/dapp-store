import styled from 'styled-components';

import {
  lineHeights,
  fontSizes,
  colors,
  fonts,
  radius,
  gradients,
} from 'components/shared/Styleguide';

export const Container = styled.div`
  padding: 10px;
`;

export const Header = styled.div`
  border-radius: ${radius.default} ${radius.default} 0 0;
  background: ${props => gradients[props.gradient]};
`;

export const HeaderBalance = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBalanceContainer = styled.div`
  text-align: center;
`;

export const HeaderBalanceAmount = styled.p`
  color: ${colors.textWhite};
  font-family: ${fonts.default};
  font-size: 56px;
  font-weight: 300;
  line-height: 1;
  margin: 0 0 10px;
`;

export const HeaderBalanceAsset = styled.p`
  color: #0e497d;
  font-family: ${fonts.default};
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
`;

export const AllocatedBalance = styled.div`
  text-align: center;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.15);
  color: ${colors.textWhite};
  font-size: ${fontSizes.default};
`;

export const Content = styled.div`
  padding: 20px 30px;
  text-align: center;
`;

export const Caption = styled.p`
  margin: 0 0 20px;
  font-size: ${fontSizes.paneCaption};
  text-align: center;
  color: ${colors.textSecondary};
  line-height: ${lineHeights.default};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonIcon = styled.div`
  font-size: 16px;
  margin-right: 10px;
`;
