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

  constructor(props) {
    super(props);

    this.state = {
      isPlaceholderVisible: !isString(props.url),
    };
  }

  handleImageError = () => this.setState({ isPlaceholderVisible: true });

  render() {
    const { className, url, theme } = this.props;
    const { isPlaceholderVisible } = this.state;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Container className={className}>
          {isPlaceholderVisible ? (
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
