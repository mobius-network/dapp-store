import styled from 'styled-components';

import {
  colors,
  breakpoints,
  fontSizes,
  fonts,
  lineHeights,
} from 'components/shared/Styleguide';

export const Content = styled.div`
  padding: 20px;
  font-family: ${fonts.default};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 300px;
  }
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.border};
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 0 15px;
`;

export const HeaderTitle = styled.p`
  color: ${colors.textDefault};
  margin: 0;
`;

export const HeaderAppName = styled.p`
  color: ${colors.textLight};
  flex: 1;
  margin: 0;
  text-align: right;
`;

export const Desc = styled.p`
  font-size: ${fontSizes.default};
  line-height: ${lineHeights.default};
  margin: 0 0 20px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 10px;
`;

export const FormInputContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const FormInput = styled.input`
  border: none;
  flex: 1;
  background: none;
  font-size: 124px;
  border-bottom: 3px solid
    ${props => (props.valid ? colors.textPrimary : colors.border)};
  appearance: textfield;
  outline: 0;
  box-shadow: none;
  width: 100%;
  font-weight: 300;
  text-align: center;

  &::placeholder {
    color: ${colors.textLight};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const FormLabel = styled.span`
  font: 700 17px ${fonts.default};
  color: ${colors.textPrimary};
`;

export const Balance = styled.p`
  color: ${colors.textLight};
  font-size: ${fontSizes.default};
  margin: 0 0 50px;
  text-align: center;
`;

export const CompleteContainer = styled.div`
  padding: 100px 0;
  text-align: center;
`;

export const CompleteIcon = styled.div`
  color: ${colors.textPrimary};
  margin: 0 auto 15px;
  font-size: 65px;
  line-height: 1;
`;

export const CompleteMessage = styled.p`
  font: 700 ${fontSizes.heading} ${fonts.default};
  color: ${colors.textDefault};
  margin: 0 auto 25px;
  text-align: center;
`;

export const CompleteDetails = styled.p`
  font: 700 ${fontSizes.heading} ${fonts.sectionHeading};
  line-height: ${lineHeights.default};
  color: ${colors.textSecondary};
  margin: 0;
`;
