import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { isProduction } from 'utils/env';
import {
  LogoImage, LogoLink, LogoName, LogoBetaShield,
} from './styles';

export default class Logo extends Component {
  static propTypes = {
    className: PropTypes.string,
    withName: PropTypes.bool,
  };

  static defaultProps = {
    withName: false,
  };

  render() {
    const { className, withName } = this.props;

    return (
      <LogoLink className={className} title="Mobius Wallet" to="/">
        <LogoImage />

        {withName && (
          <Fragment>
            <LogoName>MOBIUS</LogoName>
            <LogoBetaShield withTestNetShield={!isProduction}>
              &#946;
            </LogoBetaShield>
          </Fragment>
        )}
      </LogoLink>
    );
  }
}
