import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, StyledHyperlink } from './styles';

const Link = ({ to, href, ...rest }) =>
  to ? (
    <StyledLink to={to} {...rest} />
  ) : (
    <StyledHyperlink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  );

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Link;
