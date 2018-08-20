import styled from 'styled-components';

import Pic from 'components/shared/Pic';
import Link from 'components/shared/Link';
import { colors, fonts, lineHeights } from 'components/shared/Styleguide';

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.border};
  display: flex;
  flex-direction: row;
  padding: 15px 25px;

  &:last-child {
    border-bottom: none;
  }
`;

export const DappPic = styled(Pic)`
  margin-right: 20px;
`;

export const DappDetails = styled.div`
  flex: 1;
`;

export const DappName = styled.p`
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: 17px;
  font-weight: 700;
  line-height: ${lineHeights.default};
  margin: 0 0 5px;
  word-wrap: normal;
`;

export const DappNamePlaceholder = styled.p`
  color: ${colors.textLight};
  font-family: ${fonts.default};
  font-size: 17px;
  line-height: ${lineHeights.default};
  margin: 0 0 10px;
`;

export const DappActions = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const DappAction = styled(Link)`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const AccountDetails = styled.div`
  text-align: right;
`;

export const AccountBalance = styled.p`
  color: ${colors.textDefault};
  font-family: ${fonts.default};
  font-size: 17px;
  font-weight: 300;
  line-height: ${lineHeights.default};
  margin: 0 0 5px;
`;

export const AccountLink = styled(Link)``;
