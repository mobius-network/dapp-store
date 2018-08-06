import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

import Placeholder from './Placeholder';
import DappsList from './DappList';
import { ButtonIcon } from './styles';

class MyDapps extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    userAccountsCount: PropTypes.number,
  };

  static defaultProps = {
    userAccountsCount: 0,
  };

  render() {
    const { t, userAccountsCount } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header title={t('myDapps.title')}>
          <Button to="/developers/submit" variant="secondary">
            <ButtonIcon>
              <FontAwesomeIcon icon={faPlus} />
            </ButtonIcon>
            <span>{t('myDapps.submitDappButton')}</span>
          </Button>
        </Pane.Header>

        {userAccountsCount > 0 ? <DappsList /> : <Placeholder />}
      </Pane>
    );
  }
}

export default MyDapps;
