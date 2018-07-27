import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';

import Spinner from 'components/shared/Spinner';
import DappItem from './DappItem';

import { SpinnerContainer } from './styles';

class DappList extends Component {
  static propTypes = {
    isStoreAccountLoaded: PropTypes.bool,
    userAccountsCount: PropTypes.number,
    watchStoreAccount: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isStoreAccountLoaded: false,
  };

  componentDidMount() {
    this.props.loadStoreAccount();
  }

  render() {
    const { isStoreAccountLoaded, userAccountsCount } = this.props;
    const userAccounts = range(1, userAccountsCount + 1);

    if (isStoreAccountLoaded) {
      return (
        <Fragment>
          {userAccounts.map(id => <DappItem accountNumber={id} key={id} />)}
        </Fragment>
      );
    }

    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }
}

export default DappList;
