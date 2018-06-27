import React, { Component } from 'react';
import { object, bool, func } from 'prop-types';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';

import Modal from 'components/shared/Modal';
import Grid from 'components/shared/Grid';
import BalanceButtons from './BalanceButtons';
import {
  AppHeader,
  AppDetails,
  AppName,
  AppTagline,
  AppPic,
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

  render() {
    const {
      isOpen, onClose, app, mobiBalance,
    } = this.props;

    return (
      <Modal
        closeButton
        contentLabel="DApp Modal"
        isOpen={isOpen}
        onRequestClose={onClose}
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
          <Grid.Row flexWrap="wrap">
            <Grid.Col px={0} mb={[30, 30, 0]} width={[1, 1, 7 / 10]}>
              <Desc>{app.description}</Desc>
            </Grid.Col>
            <Grid.Col px={0} width={[1, 1, 3 / 10]}>
              <BalanceButtons app={app} mobiBalance={mobiBalance} />

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
                      <AppLinkArrow icon={faAngleRight} />
                    </AppLink>
                  )}
                </AppLinks>
              )}
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Modal>
    );
  }
}

export default DappModal;
