import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';

import { ToggleButton, Title, Icon } from './styles';

class Toggle extends Component {
  static propTypes = {
    fluid: PropTypes.bool,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    toggle: PropTypes.func,
  };

  static defaultProps = {
    fluid: false,
    disabled: false,
  };

  render() {
    const {
      className, children, disabled, fluid, toggle,
    } = this.props;

    return (
      <ToggleButton
        className={className}
        disabled={disabled}
        fluid={fluid}
        onClick={toggle}
      >
        <Title>{children}</Title>
        <Icon>
          <FontAwesomeIcon icon={faCaretDown} />
        </Icon>
      </ToggleButton>
    );
  }
}

export default Toggle;
