import styled from 'styled-components';

import {
  colors,
  fontSizes,
  fonts,
  lineHeights,
} from 'components/shared/Styleguide';
import AdditionalInfo from 'components/shared/AdditionalInfo';

export const Submit = styled(AdditionalInfo)``;

export const SubmitTitle = styled.p`
  font-size: ${fontSizes.heading};
  margin: 0 0 15px;
  font-weight: 700;
  font-family: ${fonts.default};
  color: ${colors.textDefault};
`;

export const SubmitText = styled.p`
  font-size: ${fontSizes.paneCaption};
  margin: 0 0 15px;
  line-height: ${lineHeights.default};
  font-family: ${fonts.default};
  color: ${colors.textSecondary};
`;

export const Spinner = styled.div`
  color: ${colors.textSecondary};
  text-align: center;
`;

export const SpinnerIcon = styled.div`
  margin-bottom: 10px;
`;

export const SpinnerText = styled.p`
  margin: 0;
  font: ${fontSizes.default} ${fonts.default};
`;
