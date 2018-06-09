import React, { Component, Fragment } from 'react';
import { object } from 'prop-types';

import DappModal from 'components/DappStore/DappModal';
import { Container, AppDesc, AppDetails, AppName, AppPic } from './styles';

class DappItem extends Component {
  static propTypes = {
    app: object.isRequired,
  };

  state = {
    modalOpened: false,
  };

  openModal = () => {
    this.setState({ modalOpened: true });
  };

  closeModal = () => {
    this.setState({ modalOpened: false });
  };

  render() {
    const { app } = this.props;
    const { modalOpened } = this.state;

    return (
      <Fragment>
        <Container onClick={this.openModal}>
          <AppPic url={app.image_url} />

          <AppDetails>
            <AppName>{app.name}</AppName>
            <AppDesc>{app.description}</AppDesc>
          </AppDetails>
        </Container>
        <DappModal app={app} isOpen={modalOpened} onClose={this.closeModal} />
      </Fragment>
    );
  }
}

export default DappItem;
