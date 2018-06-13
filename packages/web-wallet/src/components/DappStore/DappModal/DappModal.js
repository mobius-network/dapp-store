import React, { Component, Fragment } from 'react';
import { object, bool, func } from 'prop-types';

import Modal from 'components/shared/Modal';
import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';
import DepositModal from 'components/shared/DepositModal';
import {
  AppBalance,
  AppBalanceAmount,
  AppDetails,
  AppName,
  AppPic,
  ButtonRow,
  Desc,
} from './styles';

class DappModal extends Component {
  static propTypes = {
    app: object.isRequired,
    isOpen: bool.isRequired,
    onClose: func.isRequired,
  };

  state = {
    depositModalOpened: false,
  };

  openDepositModal = () => {
    this.setState({ depositModalOpened: true });
  };

  closeDepositModal = () => {
    this.setState({ depositModalOpened: false });
  };

  openApp = () => {
    const { openDapp, app } = this.props;

    openDapp(app);
  };

  render() {
    const { depositModalOpened } = this.state;

    const {
      isOpen, onClose, app, mobiBalance,
    } = this.props;

    return (
      <Fragment>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="DApp Modal"
        >
          <Grid>
            <Grid.Row>
              <Grid.Col px={0}>
                <AppDetails>
                  <AppPic url={app.image_url} />
                  <AppName>{app.name}</AppName>
                </AppDetails>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col px={0} width={7 / 10}>
                <Desc>{app.description}</Desc>
              </Grid.Col>
              <Grid.Col px={0} width={3 / 10}>
                <ButtonRow>
                  <Button onClick={this.openApp} fullWidth>
                    Go to App
                  </Button>
                </ButtonRow>
                <ButtonRow>
                  <Button
                    onClick={this.openDepositModal}
                    fullWidth
                    theme="secondary"
                  >
                    Deposit Funds
                  </Button>
                </ButtonRow>
                <AppBalance>
                  DApp balance:{' '}
                  <AppBalanceAmount>{mobiBalance} MOBI</AppBalanceAmount>
                </AppBalance>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Modal>

        <DepositModal
          app={app}
          isOpen={depositModalOpened}
          onClose={this.closeDepositModal}
        />
      </Fragment>
    );
  }
}

export default DappModal;
