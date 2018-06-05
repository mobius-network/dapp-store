import React, { Component } from 'react';
import PrivateRoute from 'components/shared/PrivateRoute';

class PublicRoute extends Component {
  render() {
    return (
      <PrivateRoute redirectTo="/" checkEqualityTo={false} {...this.props} />
    );
  }
}

export default PublicRoute;
