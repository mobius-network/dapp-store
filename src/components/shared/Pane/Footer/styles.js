import styled from 'styled-components';
import { colors, radius } from 'components/shared/Styleguide';

export const Container = styled.div`
  align-items: center;
  background: ${colors.bg};
  border-radius: 0 0 ${radius.default} ${radius.default};
  box-shadow: 0 -1px 0 0 #e7e6ed;
  display: flex;
  padding: 10px 15px;
`;
