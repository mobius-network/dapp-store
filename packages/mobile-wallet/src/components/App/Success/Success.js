import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

class Success extends Component {
  static propTypes = {
    text: PropTypes.string,

    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <BackgroundView
        variant="center"
        content={
          <SimpleInfo
            title={t('success.title')}
            description="You sent 140 MOBI to the address GCPI...CPJF"
          />
        }
        action={<Button variant="primary" title={t('shared.done')} />}
      />
    );
  }
}

export default Success;
