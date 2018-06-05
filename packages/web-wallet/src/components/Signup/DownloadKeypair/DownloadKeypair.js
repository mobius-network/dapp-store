import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title, DownloadButton } from './styles';

class DownloadKeypair extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    const { downloadKeypair } = this.props;

    return (
      <Container>
        <Title>DownloadKeypair</Title>
        <DownloadButton onClick={downloadKeypair}>Download</DownloadButton>
      </Container>
    );
  }
}

export default DownloadKeypair;
