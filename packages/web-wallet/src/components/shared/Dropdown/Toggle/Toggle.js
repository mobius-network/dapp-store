import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';

import { ToggleButton, Title, Icon } from './styles';

class Toggle extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    toggle: PropTypes.func,
  };

  render() {
    const { children, disabled, toggle } = this.props;

    return (
      <ToggleButton onClick={toggle} disabled={disabled}>
        <Title>{children}</Title>
        <Icon>
          <FontAwesomeIcon icon={faCaretDown} />
        </Icon>
      </ToggleButton>
    );
  }
}

export default Toggle;
