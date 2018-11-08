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
  AppTagline,
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
    t: PropTypes.func.isRequired,
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
    const { app, isAuthorized, t } = this.props;
    const { modalOpened } = this.state;

    if (isEmpty(app)) {
      return null;
    }

    return (
      <Fragment>
        <Container theme="wide">
          <Content>
            <AppPic url={app.image_url} />
            <Title>{t('featuredDapp.title')}</Title>
            <AppName>{app.name}</AppName>
            <AppTagline>{app.tagline}</AppTagline>
          </Content>
          <Footer>
            {app.featured_article_url && (
              <ReadMoreButton
                href={app.featured_article_url}
                rel="noopener noreferrer"
                target="_blank"
                theme="primaryOutline"
              >
                {t('featuredDapp.readMoreButton')}
              </ReadMoreButton>
            )}

            {isAuthorized ? (
              <Button onClick={this.openModal}>
                {t('featuredDapp.goToAppButton')}
              </Button>
            ) : (
              <Button to="/login">{t('featuredDapp.goToAppButton')}</Button>
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
