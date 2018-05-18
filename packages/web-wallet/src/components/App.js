import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleCard } from '@mobius-network/components';

import reactLogo from '../assets/images/react_logo_512x512.png';

const App = () => (
  <div>
    <h2 id="heading">Hello ReactJS!</h2>
    <img
      className="image"
      style={{ margin: '0.5em' }}
      height="40"
      width="40"
      src={reactLogo}
      alt="React Logo"
    />
    <SimpleCard color="green" title="Card">
      <p>Welcome to React Native Web!</p>
    </SimpleCard>
    <Link to="/signup">Signup</Link>
  </div>
);

export default App;
