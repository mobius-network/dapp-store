import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    app: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    mobiBalance: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const {
      isOpen, onClose, app, mobiBalance, t,
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
            <Grid.Col mb={[30, 30, 0]} px={0} width={[1, 1, 7 / 10]}>
              <Desc>{app.description}</Desc>
            </Grid.Col>
            <Grid.Col px={0} width={[1, 1, 3 / 10]}>
              <BalanceButtons app={app} mobiBalance={mobiBalance} />

              {(app.website_url || app.support_url) && (
                <AppLinks>
                  {app.website_url && (
                    <AppLink
                      href={app.website_url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <AppLinkTitle>
                        {t('dappModal.appWebsiteLink')}
                      </AppLinkTitle>
                      <AppLinkUrl>{app.website_url}</AppLinkUrl>
                      <AppLinkArrow icon={faAngleRight} />
                    </AppLink>
                  )}

                  {app.support_url && (
                    <AppLink
                      href={app.support_url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <AppLinkTitle>
                        {t('dappModal.appSupportLink')}
                      </AppLinkTitle>
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
