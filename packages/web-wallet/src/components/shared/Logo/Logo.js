import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LogoImage, LogoLink, LogoName } from './styles';

export default class Logo extends Component {
  static propTypes = {
    withName: PropTypes.bool,
  };

  static defaultProps = {
    withName: false,
  };

  render() {
    const { withName } = this.props;

    return (
      <LogoLink to="/" title="Mobius Wallet">
        <LogoImage />

        {withName && <LogoName>MOBIUS</LogoName>}
      </LogoLink>
    );
  }
}
