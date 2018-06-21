import styled from 'styled-components';

import Modal from 'components/shared/Modal';
import { fonts, fontSizes, colors } from 'components/shared/Styleguide';

export const Container = styled(Modal)`
  div > & {
    padding: 20px 0 30px 0;
    position: absolute;
    width: 70%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
export const Title = styled.p`
  margin: 0;
  padding: 0 30px;
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: ${fontSizes.heading};
  font-weight: 300;
`;
export const Description = styled.p`
  padding: 20px 30px;
  border-top: 1px solid ${colors.lightBorder};
  border-bottom: 1px solid ${colors.lightBorder};

  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: ${fontSizes.default};
`;
export const ButtonRow = styled.div`
  display: flex;
  padding: 0 30px;
`;
export const CancelButton = styled.button`
  margin-left: 35px;
  border: none;
  background: none;
  color: ${colors.textPrimary};
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.button};
`;
