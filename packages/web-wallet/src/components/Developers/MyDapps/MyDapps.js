import React, { Component } from 'react';
// import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import DappList from './DappList';
import { Container, Title } from './styles';

class MyDapps extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>MyDapps</Title>
        <Link to="/developers/submit">Submit DApp</Link>
        <DappList />
      </Container>
    );
  }
}

export default MyDapps;
