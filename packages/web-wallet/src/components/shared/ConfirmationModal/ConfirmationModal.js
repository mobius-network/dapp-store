import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import Button from 'components/shared/Button';
import {
  Container,
  Description,
  Title,
  ButtonRow,
  CancelButton,
} from './styles';

class ConfirmationModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onClose: noop,
  };

  onConfirm = async () => {
    const { onClose, onConfirm } = this.props;

    await onConfirm();
    onClose();
  };

  render() {
    const {
      isOpen,
      submitting,
      onClose,
      onCancel,
      title,
      children,
    } = this.props;

    return (
      <Container
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="DApp Modal"
      >
        <Title>{title}</Title>
        <Description>{children}</Description>

        <ButtonRow>
          <Button
            wide
            disabled={submitting}
            isLoading={submitting}
            onClick={this.onConfirm}
          >
            Confirm
          </Button>
          <CancelButton onClick={onCancel} disabled={submitting}>
            Cancel
          </CancelButton>
        </ButtonRow>
      </Container>
    );
  }
}

export default ConfirmationModal;
