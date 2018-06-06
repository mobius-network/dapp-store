import styled from 'styled-components';

import {
  radius,
  fonts,
  colors,
  breakpoints,
} from 'components/shared/Styleguide';

export const Container = styled.div`
  background: ${colors.bg};
  border-radius: ${radius.default};
  font-family: ${fonts.nunitoSans};
  margin-bottom: 20px;
  padding: 15px 25px;
  text-align: left;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;

    @media screen and (min-width: ${breakpoints.md}) {
      margin-bottom: 0;
    }
  }
`;
