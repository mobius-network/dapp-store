import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Dropdown from 'components/shared/Dropdown';
import { colors } from 'components/shared/Styleguide';

export const LangDropdownToggle = styled(Dropdown.Toggle)`
  height: 30px;
`;

export const LangDropdownIcon = styled(FontAwesomeIcon)`
  color: ${colors.textSecondary};
  margin-right: 10px;
`;
