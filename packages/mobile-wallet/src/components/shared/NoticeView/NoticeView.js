import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageBackground from 'components/shared/ImageBackground';

import { ContentView, Description, Title } from './styles';

class NoticeView extends Component {
  static propTypes = {
    children: PropTypes.any,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, description, title } = this.props;

    return (
      <ImageBackground>
        <ContentView>
          <Title selectable={false}>{title}</Title>
          <Description selectable={false}>{description}</Description>
          {children}
        </ContentView>
      </ImageBackground>
    );
  }
}

export default NoticeView;
