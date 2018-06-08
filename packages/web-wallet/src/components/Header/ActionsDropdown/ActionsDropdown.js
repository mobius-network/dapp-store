import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'components/shared/Dropdown';

class ActionsDropdown extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    mobiBalance: PropTypes.number,
    theme: PropTypes.oneOf(['default', 'dark']),
    xlmBalance: PropTypes.number,
  };

  static defaultProps = {
    mobiBalance: 0,
    xlmBalance: 0,
  };

  render() {
    const {
      theme, logout, mobiBalance, xlmBalance,
    } = this.props;

    const parsedMobiBalance = parseFloat(parseFloat(mobiBalance).toFixed(2));
    const parsedXlmBalance = parseFloat(parseFloat(xlmBalance).toFixed(2));

    return (
      <Dropdown theme={theme}>
        <Dropdown.Toggle>
          {parsedMobiBalance} MOBI / {parsedXlmBalance} XLM
        </Dropdown.Toggle>
        <Dropdown.Menu align="right">
          <Dropdown.Item to="/wallet">Wallet Balance</Dropdown.Item>
          <Dropdown.Item to="/wallet/add">Add Funds</Dropdown.Item>
          <Dropdown.Item to="/wallet/withdraw">
            Transfer Funds
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default ActionsDropdown;
