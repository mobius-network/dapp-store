import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/fontawesome-free-regular';

import { Container, Image, Placeholder } from './styles';

class Pic extends Component {
  static propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { className, url } = this.props;

    return (
      <Container className={className}>
        {url && <Image url={url} />}

        <Placeholder>
          <FontAwesomeIcon icon={faImage} />
        </Placeholder>
      </Container>
    );
  }
}

export default Pic;
