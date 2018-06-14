import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from 'components/shared/Styleguide';

import { Content, StyledReactModal } from './styles';

const style = {
  overlay: {
    backgroundColor: colors.overlay,
  },
};

class Modal extends Component {
  static propTypes = {
    children: PropTypes.any,
    contentLabel: PropTypes.string,
    fluid: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    fluid: false,
  };

  render() {
    const {
      children,
      contentLabel,
      fluid,
      isOpen,
      onAfterOpen,
      onRequestClose,
      ...rest
    } = this.props;

    return (
      <StyledReactModal
        ariaHideApp={false}
        contentLabel={contentLabel}
        fluid={fluid}
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        style={style}
        {...rest}
      >
        <Content>{children}</Content>
      </StyledReactModal>
    );
  }
}

export default Modal;
