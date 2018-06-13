import React, { Component, Fragment } from 'react';
import { object, bool, func } from 'prop-types';
import Modal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';

import { colors, radius } from 'components/shared/Styleguide';
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
    app: object.isRequired,
    onClose: func.isRequired,
    isOpen: bool.isRequired,
    style: object,
  };

  static defaultProps = {
    style: {
      overlay: {
        backgroundColor: colors.overlay,
      },
      content: {
        borderRadius: radius.default,
        bottom: 'auto',
        left: '50%',
        marginRight: '-50%',
        padding: '30px',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  };

  state = {
    amount: 3,
  };

  onClose = () => {
    this.props.onClose();
    this.props.resetRequest('depositApp');
    this.setState({ amount: 3 });
  };

  onAmountChange = e => {
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
          onClick={this.onDeposit}
          fullWidth
          isLoading={loading}
          disabled={!amount || loading || amount > mobiBalance}
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

        <Button onClick={this.onClose} fullWidth>
          Back
        </Button>
      </Fragment>
    );
  };

  render() {
    const {
      app, isOpen, style, depositCompleted,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.onClose}
        contentLabel="Deposit modal"
        style={style}
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
