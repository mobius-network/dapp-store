import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Text, themes } from './styles';

class Badge extends Component {
  static propTypes = {
    children: PropTypes.any,
    theme: PropTypes.oneOf(['default', 'success', 'error']),
  };

  static defaultProps = {
    theme: 'default',
  };

  render() {
    const { children, theme } = this.props;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Text>{children}</Text>
      </ThemeProvider>
    );
  }
}

export default Badge;
