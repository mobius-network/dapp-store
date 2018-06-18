import styled from 'styled-components';

import { colors, fonts } from 'components/shared/Styleguide';

export const Container = styled.div``;

export const Title = styled.p`
  color: ${colors.textLight};
  font-family: ${fonts.default};
  font-size: 12px;
  font-weight: 700;
  margin: 0 0 15px;
  text-transform: uppercase;
`;

export const Items = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
