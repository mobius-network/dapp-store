import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import Button from 'components/shared/Button';
import DappModal from 'components/DappStore/DappModal';
import {
  Container,
  Content,
  Title,
  Footer,
  AppPic,
  AppName,
  AppDesc,
  ReadMoreButton,
} from './styles';

class FeaturedDapp extends Component {
  static propTypes = {
    app: PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      image_url: PropTypes.string,
      name: PropTypes.string,
      stellar_public_key: PropTypes.string,
      url: PropTypes.string,
    }),
    isAuthorized: PropTypes.bool,
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
    const { app, isAuthorized } = this.props;
    const { modalOpened } = this.state;

    if (isEmpty(app)) {
      return null;
    }

    return (
      <Fragment>
        <Container theme="wide">
          <Content>
            <AppPic url={app.image_url} />
            <Title>Featured DApp</Title>
            <AppName>{app.name}</AppName>
            <AppDesc>{app.description}</AppDesc>
          </Content>
          <Footer>
            {app.featured_article_url && (
              <ReadMoreButton
                theme="primaryOutline"
                target="_blank"
                rel="noopener noreferrer"
                href={app.featured_article_url}
              >
                Read More on Medium
              </ReadMoreButton>
            )}

            {isAuthorized ? (
              <Button onClick={this.openModal}>GO TO APP</Button>
            ) : (
              <Button to="/login">GO TO APP</Button>
            )}
          </Footer>
        </Container>

        {isAuthorized && (
          <DappModal app={app} isOpen={modalOpened} onClose={this.closeModal} />
        )}
      </Fragment>
    );
  }
}

export default FeaturedDapp;
