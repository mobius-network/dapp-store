import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import { Container, Title, Items } from './styles';

class SidebarNav extends Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, title } = this.props;

    return (
      <Container>
        <Title>{title}</Title>
        <Items>{children}</Items>
      </Container>
    );
  }
}

SidebarNav.Item = Item;

export default SidebarNav;
