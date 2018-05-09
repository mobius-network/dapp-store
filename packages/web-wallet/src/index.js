import { hot } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

const App = hot(module)(Root);

const renderApp = () => render(
  <App />,
  document.getElementById('root'),
);

renderApp();
