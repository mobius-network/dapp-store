import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';

import {
  Container, Spinner, SpinnerIcon, SpinnerText,
} from './styles';

class Loading extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t, ...rest } = this.props;

    return (
      <Container {...rest}>
        <Spinner>
          <SpinnerIcon>
            <FontAwesomeIcon icon={faCircleNotch} size="2x" spin />
          </SpinnerIcon>
          <SpinnerText>{t('shared.loading')}</SpinnerText>
        </Spinner>
      </Container>
    );
  }
}

export default Loading;
