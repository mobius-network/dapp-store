import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/shared/Modal';

import {
  Actions, Action, Content, Message,
} from './styles';

class ConfirmationModal extends Component {
  static propTypes = {
    children: PropTypes.any,
    isConfirming: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isConfirming: false,
  };

  render() {
    const {
      children,
      isConfirming,
      isOpen,
      onCancel,
      onConfirm,
      t,
      title,
    } = this.props;

    return (
      <Modal
        contentLabel="Confirmation Modal"
        fluid
        isOpen={isOpen}
        shouldCloseOnOverlayClick={false}
        title={title}
      >
        <Content>
          {children && <Message>{children}</Message>}

          <Actions>
            <Action isLoading={isConfirming} onClick={onConfirm} wide>
              {t('shared.continue')}
            </Action>
            <Action onClick={onCancel} theme="text">
              {t('shared.cancel')}
            </Action>
          </Actions>
        </Content>
      </Modal>
    );
  }
}

export default ConfirmationModal;
