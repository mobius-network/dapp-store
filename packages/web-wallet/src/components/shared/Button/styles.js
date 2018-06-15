import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Spinner from 'components/shared/Spinner';
import { fonts, fontSizes, radius } from 'components/shared/Styleguide';

const buttonStyles = `
  position: relative;
  align-items: stretch;
  border-radius: ${radius.big};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 42px;
  margin: 0;
  opacity: 1;
  outline: 2px;
  overflow: hidden;
  padding: 0;
  text-decoration: none;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }

  &:active {
    outline: 0;
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
  }
`;

export const StyledButton = styled.button`
  background: ${props => props.theme.background};
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  ${buttonStyles};
`;

export const StyledLink = styled(Link)`
  background: ${props => props.theme.background};
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  ${buttonStyles};

  &:visited {
    ${buttonStyles};
  }
`;

export const ExternalLink = StyledLink.withComponent('a');

function getContentPadding(props) {
  if (props.fullWidth) {
    return '0';
  }

  if (props.wide) {
    return '0 60px';
  }

  return '0 30px';
}

export const Content = styled.div`
  align-items: center;
  background: ${props => props.theme.contentBackground};
  border-radius: 18px;
  color: ${props => props.theme.color};
  display: flex;
  flex-direction: row;
  flex: 1;
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.button};
  font-weight: ${props => props.theme.fontWeight};
  justify-content: center;
  margin: 2px;
  padding: ${props => getContentPadding(props)};
  text-transform: uppercase;
`;

export const LoadingIndicator = styled(Spinner)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: ${props => props.theme.loadingIndicatorColor || 'white'};
`;
