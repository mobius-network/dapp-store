import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageBackground from 'components/shared/ImageBackground';
import Button from 'components/shared/Button';

import {
  Container, Content, Action, Title, Description,
} from './styles';

class Loading extends Component {
  static propTypes = {
    text: PropTypes.string,

    t: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ImageBackground>
        <Container>
          <Content>
            <Title>Success!</Title>
            <Description>
              You sent 140 MOBI to the address GCPI...CPJF
            </Description>
          </Content>
          <Action>
            <Button variant="primary" title="Done" />
          </Action>
        </Container>
      </ImageBackground>
    );
  }
}

export default Loading;
