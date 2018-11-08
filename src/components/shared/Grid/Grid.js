import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { breakpoints } from 'components/shared/Styleguide';
import Col from './Col';
import Row from './Row';
import { Container } from './styles';

class Grid extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider
        theme={{
          space: [0, 6, 12, 18, 24],
          breakpoints: [breakpoints.sm, breakpoints.md, breakpoints.lg],
        }}
      >
        <Container>{children}</Container>
      </ThemeProvider>
    );
  }
}

Grid.Col = Col;

Grid.Row = Row;

export default Grid;
