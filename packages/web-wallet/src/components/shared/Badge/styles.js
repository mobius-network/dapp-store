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
  background: ${props => props.theme.background};
  border-radius: ${radius.small};
  color: ${props => props.theme.color};
  font-family: ${fonts.default};
  font-size: 15px;
  font-weight: 300;
  line-height: 1;
  margin: 0 10px;
  padding: 3px 15px;
  white-space: nowrap;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
