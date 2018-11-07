import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/fontawesome-free-regular';

import { Container, Image, Placeholder } from './styles';

class Pic extends Component {
  static propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isPlaceholderVisible: !isString(props.url),
    };
  }

  handleImageError = () => this.setState({ isPlaceholderVisible: true });

  render() {
    const { className, url } = this.props;
    const { isPlaceholderVisible } = this.state;

    return (
      <Container className={className}>
        {isPlaceholderVisible ? (
          <Placeholder>
            <FontAwesomeIcon icon={faImage} />
          </Placeholder>
        ) : (
          <Image onError={this.handleImageError} src={url} />
        )}
      </Container>
    );
  }
}

export default Pic;
