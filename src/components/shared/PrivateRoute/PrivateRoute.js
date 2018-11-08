import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  static propTypes = {
    checkEqualityTo: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    isAuthorized: PropTypes.bool,
    redirect: PropTypes.bool,
    redirectTo: PropTypes.string,
  };

  static defaultProps = {
    checkEqualityTo: true,
    redirect: true,
    redirectTo: '/login',
  };

  render() {
    const {
      isAuthorized,
      component: RouteComponent,
      checkEqualityTo,
      redirectTo,
      redirect,
      ...rest
    } = this.props;

    const unauthorizedContent = redirect ? <Redirect to={redirectTo} /> : null;

    return (
      <Route
        {...rest}
        render={props => (isAuthorized === checkEqualityTo ? (
            <RouteComponent {...props} />
        ) : (
          unauthorizedContent
        ))
        }
      />
    );
  }
}

export default PrivateRoute;
