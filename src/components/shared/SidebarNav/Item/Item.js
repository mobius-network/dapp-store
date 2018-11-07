import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, StyledLink } from './styles';

class Item extends Component {
  static propTypes = {
    children: PropTypes.any,
    to: PropTypes.string.isRequired,
  };

  render() {
    const { children, to } = this.props;

    return (
      <Container>
        <StyledLink to={to} exact>
          {children}
        </StyledLink>
      </Container>
    );
  }
}

export default Item;
