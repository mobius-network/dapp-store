import styled from 'styled-components';
import { colors } from 'components/shared/Styleguide';

export const Container = styled.div`
  padding: ${props => props.theme.sectionPadding};
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
  }
`;
