import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, StyledLink, StyledHyperlink } from './styles';

class Item extends Component {
  static propTypes = {
    children: PropTypes.any,
    href: PropTypes.string,
    to: PropTypes.string,
  };

  render() {
    const {
      children, href, to, ...rest
    } = this.props;

    return (
      <Container>
        {to ? (
          <StyledLink to={to} exact>
            {children}
          </StyledLink>
        ) : (
          <StyledHyperlink
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            {...rest}
          >
            {children}
          </StyledHyperlink>
        )}
      </Container>
    );
  }
}

export default Item;
