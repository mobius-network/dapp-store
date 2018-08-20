import styled from 'styled-components';

import Button from 'components/shared/Button';
import { colors, fonts } from 'components/shared/Styleguide';

import image from './images/cube.svg';

export const Message = styled.div`
  padding: 25px 0;
`;

export const MessageImage = styled.div`
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 95px;
  margin: 0 auto 20px;
  width: 95px;
`;

export const MessageText = styled.p`
  color: #383d58;
  font-family: ${fonts.default};
  font-size: 18px;
  margin: 0;
  text-align: center;
`;

export const Action = styled.div`
  padding: 15px 0;
  text-align: center;
`;

export const ActionTitle = styled.p`
  color: ${colors.textPrimary};
  font-family: ${fonts.default};
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 5px;
`;

export const ActionDesc = styled.p`
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: 15px;
  margin: 0 0 20px;
`;

export const ActionButton = styled(Button)`
  margin: 0 auto;
`;
