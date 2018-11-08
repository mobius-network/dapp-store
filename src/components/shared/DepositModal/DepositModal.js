import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';

import Modal from 'components/shared/Modal';
import Button from 'components/shared/Button';
import {
  Balance,
  Content,
  Desc,
  FormInput,
  FormInputContainer,
  FormLabel,
  FormRow,
  Header,
  HeaderAppName,
  HeaderTitle,
  CompleteContainer,
  CompleteIcon,
  CompleteMessage,
  CompleteDetails,
} from './styles';

class DepositModal extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    depositApp: PropTypes.object,
    depositCompleted: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    mobiBalance: PropTypes.number,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    amount: 3,
  };

  onOpen = () => {
    this.setState({ amount: 3 });
  };

  onClose = () => {
    this.props.onClose();
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    this.setState({ amount });
  };

  onDeposit = () => {
    const { app } = this.props;
    const { amount } = this.state;

    this.props.depositApp.mutate({ app, amount });
  };

  renderForm = () => {
    const { amount } = this.state;
    const {
      mobiBalance,
      depositApp: { loading },
    } = this.props;

    return (
      <Fragment>
        <Desc>
          Deposited MOBI will be available for use within this DApp. Withdraw at
          any time.
        </Desc>
        <FormRow>
          <FormInputContainer>
            <FormInput
              onChange={this.onAmountChange}
              placeholder="0.0"
              size="1"
              type="number"
              valid={amount > 0}
              value={amount}
            />
          </FormInputContainer>
          <FormLabel>MOBI</FormLabel>
        </FormRow>
        <Balance>
          Available balance: <b>{mobiBalance} MOBI</b>
        </Balance>

        <Button
          disabled={!amount || loading || amount > mobiBalance}
          fullWidth
          isLoading={loading}
          onClick={this.onDeposit}
        >
          DEPOSIT
        </Button>
      </Fragment>
    );
  };

  renderDone = () => {
    const { app } = this.props;
    const { amount } = this.state;

    return (
      <Fragment>
        <CompleteContainer>
          <CompleteIcon>
            <FontAwesomeIcon icon={faCheck} />
          </CompleteIcon>
          <CompleteMessage>All done!</CompleteMessage>
          <CompleteDetails>
            We’ve successfully transferred {amount} MOBI to {app.name}.
          </CompleteDetails>
        </CompleteContainer>

        <Button fullWidth onClick={this.onClose}>
          Back
        </Button>
      </Fragment>
    );
  };

  render() {
    const { app, isOpen, depositCompleted } = this.props;

    return (
      <Modal
        contentLabel="Deposit Modal"
        fluid
        isOpen={isOpen}
        onAfterOpen={this.onOpen}
        onRequestClose={this.onClose}
      >
        <Content>
          <Header>
            <HeaderTitle>Deposit</HeaderTitle>
            <HeaderAppName>{app.name}</HeaderAppName>
          </Header>

          {depositCompleted ? this.renderDone() : this.renderForm()}
        </Content>
      </Modal>
    );
  }
}

export default DepositModal;
