import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Header from 'components/Header';

const DappStoreLayout = ({ component: Component, ...rest }) => (
  <DefaultLayout
    {...rest}
    component={matchProps => (
      <Fragment>
        <Header />

        <Component {...matchProps} />
      </Fragment>
    )}
  />
);

DappStoreLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default DappStoreLayout;
