import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DappItem from './DappItem';

class DappList extends Component {
  static propTypes = {
    loadApps: PropTypes.object.isRequired,
  };

  render() {
    const { result: { apps } = {} } = this.props.loadApps;

    return (
      <Fragment>
        {apps.map(app => <DappItem key={app.id} app={app} />)}
      </Fragment>
    );
  }
}

export default DappList;
