import styled from 'styled-components';

import { fonts, fontSizes, radius } from 'components/shared/Styleguide';

export const Container = styled.div`
  .Toastify__toast {
    border-radius: ${radius.medium};
    min-height: 0;
    padding: 10px 16px;
  }

  .Toastify__toast--error {
    background: linear-gradient(90deg, #eb506a 0%, #eb5d50 100%);
  }

  .Toastify__toast-body {
    font-family: ${fonts.nunitoSans};
    font-size: ${fontSizes.formField};
    padding-right: 10px;
  }

  .Toastify__close-button {
    font-size: 20px;
  }
`;
