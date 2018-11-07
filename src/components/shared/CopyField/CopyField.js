import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/fontawesome-free-regular';
import { Container, Text, CopyButton } from './styles';

class CopyField extends Component {
  static propTypes = {
    onCopy: PropTypes.func,
    t: PropTypes.func.isRequired,
    text: PropTypes.string,
  };

  render() {
    const { onCopy, t, text } = this.props;

    return (
      <Container>
        <Text>{text}</Text>
        <CopyToClipboard onCopy={onCopy} text={text}>
          <CopyButton title={t('copyField.title')}>
            <FontAwesomeIcon fixedWidth icon={faCopy} />
          </CopyButton>
        </CopyToClipboard>
      </Container>
    );
  }
}

export default CopyField;
