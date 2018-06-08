import styled from 'styled-components';

import { colors, radius } from 'components/shared/Styleguide';

function getMenuPlacement(placement) {
  switch (placement) {
    case 'top':
      return `
        bottom: 100%;
        margin-bottom: 5px;
        top: auto;
      `;

    default:
      return `
        bottom: auto;
        margin-top: 5px;
        top: 100%;
      `;
  }
}

function getMenuAlign(align) {
  switch (align) {
    case 'right':
      return `
        left: auto;
        right: 0;
      `;

    default:
      return `
        left: 0;
        right: auto;
      `;
  }
}

export const Container = styled.div`
  background: ${colors.bgWhite};
  border-radius: ${radius.medium};
  box-shadow: 0 2px 4px 0 #f1f2f7;
  padding: 5px 0;
  position: absolute;
  ${props => getMenuPlacement(props.placement)};
  ${props => getMenuAlign(props.align)};
`;
