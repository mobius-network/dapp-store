import styled from 'styled-components';

import { fonts } from 'components/shared/Styleguide';
import Form from './LoginForm';

export const LoginForm = styled(Form)``;

export const SignupBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignupBlockText = styled.p`
  margin: 0;
  font-family: ${fonts.nunitoSans};
`;
