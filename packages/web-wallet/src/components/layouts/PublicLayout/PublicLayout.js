import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Grid from 'components/shared/Grid';
import Header from 'components/Header';

import { Content } from './styles';

export default class PublicLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
      <DefaultLayout
        redirectTo="/"
        checkEqualityTo={false}
        {...rest}
        component={matchProps => (
          <Fragment>
            <Header />

            <Content>
              <Grid>
                <Grid.Row justifyContent="center">
                  <Grid.Col width={[1, 1 / 2]}>
                    <RouterComponent {...matchProps} />
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </Content>
          </Fragment>
        )}
      />
    );
  }
}
