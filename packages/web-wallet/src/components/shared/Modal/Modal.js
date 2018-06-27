import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

import { colors } from 'components/shared/Styleguide';

import {
  Body,
  Content,
  Header,
  HeaderTitle,
  CloseButton,
  StyledReactModal,
} from './styles';

const style = {
  overlay: {
    backgroundColor: colors.overlay,
  },
};

class Modal extends Component {
  static propTypes = {
    children: PropTypes.any,
    closeButton: PropTypes.bool,
    contentLabel: PropTypes.string,
    fluid: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    isClosable: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    closeButton: false,
    fluid: false,
    isClosable: true,
  };

  handleClose = e => {
    const { isClosable, onRequestClose } = this.props;

    if (!isClosable) {
      return false;
    }

    return onRequestClose(e);
  };

  render() {
    const {
      children,
      className,
      closeButton,
      contentLabel,
      fluid,
      isOpen,
      onAfterOpen,
      onRequestClose,
      title,
      ...rest
    } = this.props;

    return (
      <StyledReactModal
        ariaHideApp={false}
        contentLabel={contentLabel}
        fluid={fluid}
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={this.handleClose}
        shouldCloseOnEsc={false}
        style={style}
        {...rest}
      >
        <Content className={className}>
          {title && (
            <Header>
              <HeaderTitle>{title}</HeaderTitle>
            </Header>
          )}

          {closeButton && (
            <CloseButton onClick={this.handleClose} title="Close" type="button">
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          )}

          <Body>{children}</Body>
        </Content>
      </StyledReactModal>
    );
  }
}

export default Modal;
