import React from 'react';
import { render } from 'react-dom';

import store, { persistor } from 'state/store';
import Root from 'Root';

const renderApp = () => render(
    <Root persistor={persistor} store={store} />,
    document.getElementById('root')
);

renderApp();
