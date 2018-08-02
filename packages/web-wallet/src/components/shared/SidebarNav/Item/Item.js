import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, StyledLink, StyledHyperlink } from './styles';

class Item extends Component {
  static propTypes = {
    children: PropTypes.any,
    exact: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
  };

  static defaultProps = {
    exact: true,
  };

  render() {
    const {
      children, exact, href, to, ...rest
    } = this.props;

    return (
      <Container>
        {to ? (
          <StyledLink to={to} exact={exact}>
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
