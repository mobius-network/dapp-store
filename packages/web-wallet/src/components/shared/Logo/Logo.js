import React from 'react';
import PropTypes from 'prop-types';

import { LogoImage, LogoLink, LogoName } from './styles';

const Logo = ({ withName }) => (
  <LogoLink to="/" title="Mobius Wallet">
    <LogoImage />

    {withName && <LogoName>MOBIUS</LogoName>}
  </LogoLink>
);

Logo.propTypes = {
  withName: PropTypes.bool,
};

Logo.defaultProps = {
  withName: false,
};

export default Logo;
