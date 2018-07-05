import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Dropdown from 'components/shared/Dropdown';

class ActionsDropdown extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    mobiBalance: PropTypes.number,
    t: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['default', 'dark']),
    xlmBalance: PropTypes.number,
  };

  static defaultProps = {
    mobiBalance: 0,
    xlmBalance: 0,
  };

  render() {
    const {
      t, theme, logout, mobiBalance, xlmBalance,
    } = this.props;

    const parsedMobiBalance = parseFloat(parseFloat(mobiBalance).toFixed(2));
    const parsedXlmBalance = parseFloat(parseFloat(xlmBalance).toFixed(2));

    return (
      <Dropdown theme={theme}>
        <Dropdown.Toggle>
          {parsedMobiBalance} MOBI / {parsedXlmBalance} XLM
        </Dropdown.Toggle>
        <Dropdown.Menu align="right">
          <Dropdown.Item to="/wallet">
            {t('navigation.wallet.balance')}
          </Dropdown.Item>
          <Dropdown.Item to="/wallet/add">
            {t('navigation.wallet.addFunds')}
          </Dropdown.Item>
          <Dropdown.Item to="/wallet/withdraw">
            {t('navigation.wallet.withdrawFunds')}
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>
            {t('navigation.logout')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default translate()(ActionsDropdown);
