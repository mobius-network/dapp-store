import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LinkItem, ButtonItem } from './styles';

class Item extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func,
  };

  handleClick = () => {
    const { onClick, close } = this.props;

    if (onClick) {
      onClick();
    }

    close();
  };

  render() {
    const {
      children, disabled, to, ...rest
    } = this.props;

    return to ? (
      <LinkItem to={to} disabled={disabled} onClick={this.handleClick}>
        {children}
      </LinkItem>
    ) : (
      <ButtonItem {...rest} onClick={this.handleClick}>
        {children}
      </ButtonItem>
    );
  }
}

export default Item;
