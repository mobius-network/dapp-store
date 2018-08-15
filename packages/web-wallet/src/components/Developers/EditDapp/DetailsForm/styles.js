import styled from 'styled-components';

import AdditionalInfo from 'components/shared/AdditionalInfo';

import { fonts, fontSizes } from 'components/shared/Styleguide';

export const SpinnerContainer = styled.div`
  padding: 25px 0;
  text-align: center;
`;

export const KeyContainer = styled(AdditionalInfo)`
  margin: 0 0 15px;
`;

export const KeyRevealButton = styled.button`
  background: none;
  border-width: 0 0 1px 0;
  border-style: dashed;
  cursor: pointer;
  display: inline-block;
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.default};
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 0;
  text-decoration: none;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
    border-bottom: none;
  }
`;
