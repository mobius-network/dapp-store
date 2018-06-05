import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const {
      isAuthorized,
      component: RouteComponent,
      checkEqualityTo = true,
      redirectTo = '/login',
      redirect = true,
      ...rest
    } = this.props;

    const unauthorizedContent = redirect ? <Redirect to={redirectTo} /> : null;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized === checkEqualityTo ? (
            <RouteComponent {...props} />
          ) : (
            unauthorizedContent
          )
        }
      />
    );
  }
}

export default PrivateRoute;
