import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, TitleView, Title, ContentView } from './styles';

export default class SimpleCard extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    titleTextColor: PropTypes.string,
  };

  static defaultProps = {
    color: '#222',
    titleTextColor: '#fff',
  };

  render() {
    const {
      children, color, title, titleTextColor,
    } = this.props;

    return (
      <Container bordercolor={color}>
        <TitleView backgroundcolor={color}>
          <Title color={titleTextColor}>{title}</Title>
        </TitleView>
        <ContentView>{children}</ContentView>
      </Container>
    );
  }
}
