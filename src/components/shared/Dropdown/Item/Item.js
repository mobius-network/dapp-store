import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LinkItem, ButtonItem } from './styles';

class Item extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
      <LinkItem disabled={disabled} onClick={this.handleClick} to={to}>
        {children}
      </LinkItem>
    ) : (
      <ButtonItem {...rest} disabled={disabled} onClick={this.handleClick}>
        {children}
      </ButtonItem>
    );
  }
}

export default Item;
