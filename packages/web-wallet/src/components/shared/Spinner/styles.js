import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

export const Container = styled.div``;

export const Icon = styled(FontAwesomeIcon).attrs({
  icon: faSpinner,
  size: '2x',
  spin: true,
})``;
