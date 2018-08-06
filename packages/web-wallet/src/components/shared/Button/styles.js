import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Spinner from 'components/shared/Spinner';
import {
  colors,
  fonts,
  fontSizes,
  gradients,
  radius,
  shadows,
} from 'components/shared/Styleguide';

const variants = {
  primary: {
    background: gradients.button,
    border: 'none',
    boxShadow: shadows.buttonPrimary,
    color: colors.textWhite,
    contentBackground: 'transparent',
    fontWeight: 700,
    loadingIndicatorColor: colors.textWhite,
  },
  primaryOutline: {
    background: gradients.button,
    border: 'none',
    boxShadow: shadows.buttonPrimary,
    color: '#6278F1',
    contentBackground: colors.bg,
    fontWeight: 700,
    loadingIndicatorColor: colors.textWhite,
  },
  secondary: {
    background: colors.bgWhite,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.buttonSecondary,
    color: colors.textPrimary,
    contentBackground: colors.bgWhite,
    fontWeight: 400,
    loadingIndicatorColor: colors.textPrimary,
  },
  text: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    color: colors.textPrimary,
    contentBackground: 'none',
    fontWeight: 400,
    loadingIndicatorColor: colors.textPrimary,
  },
};

function getButtonWidth({ theme }) {
  if (theme.fullWidth) {
    return '100%';
  }

  if (theme.square) {
    return '42px';
  }

  return 'auto';
}

function getContentPadding({ theme }) {
  if (theme.fullWidth) {
    return '0';
  }

  if (theme.wide) {
    return '0 60px';
  }

  if (theme.square) {
    return '0';
  }

  return '0 30px';
}

const buttonStyles = css`
  align-items: stretch;
  background: ${({ theme }) => variants[theme.variant].background};
  border-radius: ${radius.big};
  border: ${({ theme }) => variants[theme.variant].border};
  box-shadow: ${({ theme }) => variants[theme.variant].boxShadow};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 42px;
  margin: 0;
  opacity: 1;
  outline: 2px;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-decoration: none;
  transition: 0.3s;
  user-select: none;
  white-space: nowrap;
  width: ${getButtonWidth};

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }

  &:active {
    outline: 0;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles};
`;

export const StyledLink = styled(Link)`
  ${buttonStyles};

  &:visited {
    ${buttonStyles};
  }
`;

export const ExternalLink = styled.a`
  ${buttonStyles};

  &:visited {
    ${buttonStyles};
  }
`;

export const Content = styled.div`
  align-items: center;
  background: ${({ theme }) => variants[theme.variant].contentBackground};
  border-radius: 18px;
  color: ${({ theme }) => variants[theme.variant].color};
  display: flex;
  flex-direction: row;
  flex: 1;
  font-family: ${fonts.nunitoSans};
  font-size: ${fontSizes.button};
  font-weight: ${({ theme }) => variants[theme.variant].fontWeight};
  justify-content: center;
  margin: 2px;
  padding: ${getContentPadding};
  text-transform: uppercase;
`;

export const LoadingIndicator = styled(Spinner)`
  color: ${({ theme }) => variants[theme.variant].loadingIndicatorColor};
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
