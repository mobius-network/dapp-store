import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Header from 'components/Header';

export default class DappStoreLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
      <DefaultLayout
        {...rest}
        component={matchProps => (
          <Fragment>
            <Header />

            <RouterComponent {...matchProps} />
          </Fragment>
        )}
      />
    );
  }
}
