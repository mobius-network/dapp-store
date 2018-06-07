import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';

import { Container, Spinner, SpinnerIcon, SpinnerText } from './styles';

class Loading extends Component {
  render() {
    return (
      <Container>
        <Spinner>
          <SpinnerIcon>
            <FontAwesomeIcon icon={faCircleNotch} size="2x" spin />
          </SpinnerIcon>
          <SpinnerText>Loading</SpinnerText>
        </Spinner>
      </Container>
    );
  }
}

export default Loading;
