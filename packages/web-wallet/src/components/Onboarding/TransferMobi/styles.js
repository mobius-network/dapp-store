import styled from 'styled-components';

import TransferSuccessMessage from 'components/shared/TransferSuccessMessage';

import { colors, fontSizes, lineHeights } from 'components/shared/Styleguide';

export const Container = styled.div``;

export const WaitingTitle = styled.p`
  font-size: ${fontSizes.sectionHeading};
  font-weight: 700;
  margin: 0 0 5px;
`;

export const WaitingCaption = styled.p`
  color: ${colors.textSecondary};
  font-size: ${fontSizes.default};
  line-height: ${lineHeights.default};
  margin: 0 0 20px;
`;

export const CompleteMessage = styled(TransferSuccessMessage)`
  margin-bottom: 50px;
`;
