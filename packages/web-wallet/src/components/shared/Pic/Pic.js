import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { isString } from 'lodash';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/fontawesome-free-regular';

import { Container, Image, Placeholder, themes } from './styles';

class Pic extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'small']),
    url: PropTypes.string,
  };

  static defaultProps = {
    theme: 'default',
  };

  state = {
    isPlaceholderVisible: false,
    isLoadingFailed: false,
  };

  static getDerivedStateFromProps(props, state) {
    const isPlaceholderVisible = !isString(props.url);

    if (isPlaceholderVisible === state.isPlaceholderVisible) {
      return null;
    }

    return { isPlaceholderVisible };
  }

  handleImageError = () => this.setState({ isLoadingFailed: true });

  render() {
    const { className, url, theme } = this.props;
    const { isLoadingFailed, isPlaceholderVisible } = this.state;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Container className={className}>
          {isPlaceholderVisible || isLoadingFailed ? (
            <Placeholder>
              <FontAwesomeIcon icon={faImage} />
            </Placeholder>
          ) : (
            <Image src={url} onError={this.handleImageError} />
          )}
        </Container>
      </ThemeProvider>
    );
  }
}

export default Pic;
