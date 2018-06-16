import React, { Component, Fragment } from 'react';
import { object, bool, func } from 'prop-types';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';

import Modal from 'components/shared/Modal';
import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';
import DepositModal from 'components/shared/DepositModal';
import {
  AppBalance,
  AppBalanceAmount,
  AppHeader,
  AppDetails,
  AppName,
  AppTagline,
  AppPic,
  ButtonRow,
  Desc,
  AppLinks,
  AppLink,
  AppLinkTitle,
  AppLinkUrl,
  AppLinkArrow,
} from './styles';

class DappModal extends Component {
  static propTypes = {
    app: object.isRequired,
    isOpen: bool.isRequired,
    onClose: func.isRequired,
  };

  static defaultProps = {
    mobiBalance: 0,
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
              <Grid.Col px={0} width={1}>
                <AppHeader>
                  <AppPic url={app.image_url} />
                  <AppDetails>
                    <AppName>{app.name}</AppName>
                    {app.tagline && <AppTagline>{app.tagline}</AppTagline>}
                  </AppDetails>
                </AppHeader>
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

                {(app.website_url || app.support_url) && (
                  <AppLinks>
                    {app.website_url && (
                      <AppLink
                        href={app.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AppLinkTitle>Website</AppLinkTitle>
                        <AppLinkUrl>{app.website_url}</AppLinkUrl>
                        <AppLinkArrow icon={faAngleRight} />
                      </AppLink>
                    )}

                    {app.support_url && (
                      <AppLink
                        href={app.support_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AppLinkTitle>Support</AppLinkTitle>
                        <AppLinkUrl>{app.support_url}</AppLinkUrl>
                        <AppLinkArrow icon={faAngleRight} />
                      </AppLink>
                    )}
                  </AppLinks>
                )}
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
