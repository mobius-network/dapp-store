// Hot-loader import should go first to path React
import { hot } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import store, { persistor } from 'state/store';
import Root from 'Root';

const App = hot(module)(Root);

const renderApp = () =>
  render(
    <App store={store} persistor={persistor} />,
    document.getElementById('root')
  );

renderApp();
