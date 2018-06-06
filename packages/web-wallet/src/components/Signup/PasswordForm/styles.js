import { Field } from 'redux-form';
import styled from 'styled-components';

import { fonts } from 'components/shared/Styleguide';

export const Form = styled.form``;

export const Title = styled.p``;

export const TextField = styled(Field)``;

export const SubmitButton = styled.button``;

export const LoginBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginBlockText = styled.p`
  margin: 0;
  font-family: ${fonts.nunitoSans};
`;
