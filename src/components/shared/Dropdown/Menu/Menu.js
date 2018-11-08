import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

class Menu extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    children: PropTypes.any,
    close: PropTypes.func,
    isOpen: PropTypes.bool,
    placement: PropTypes.oneOf(['top', 'bottom']),
  };

  static defaultProps = {
    align: 'left',
    isOpen: false,
    placement: 'bottom',
  };

  render() {
    const {
      children, close, isOpen, align, placement,
    } = this.props;

    return isOpen ? (
      <Container align={align} placement={placement}>
        {Children.map(children, child => cloneElement(child, { close }))}
      </Container>
    ) : null;
  }
}

export default Menu;
