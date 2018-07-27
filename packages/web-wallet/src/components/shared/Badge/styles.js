import styled from 'styled-components';

import { fonts, radius } from 'components/shared/Styleguide';

export const themes = {
  default: {
    background: '#F1E9D9',
    color: '#897E67',
  },
  success: {
    background: '#DCF1DC',
    color: '#72896F',
  },
  error: {
    background: '#F1CBC6',
    color: '#89766E',
  },
};

export const Text = styled.span`
  font-family: ${fonts.default};
  font-size: 15px;
  line-height: 1;
  border-radius: ${radius.small};
  padding: 3px 15px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-weight: 300;
  white-space: nowrap;
  margin: 0 10px;
`;
