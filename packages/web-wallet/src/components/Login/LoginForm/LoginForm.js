import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import FileInput from 'components/shared/FileInput';
import Button from 'components/shared/Button';
import { ActionsRow, StyledLink } from './styles';

class LoginForm extends Component {
  static propTypes = {
    change: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  onKeyUpload = (event, [keyfile] = []) => {
    if (!keyfile) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.props.change('keyfile', reader.result);
    };

    reader.readAsText(keyfile);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <FormRow component={TextInput} name="password" placeholder="Password" />

        <FormRow
          component={FileInput}
          name="keyfile"
          onChange={this.onKeyUpload}
          placeholder="Keyfile"
        />

        <StyledLink href="#">Can’t find your keyfile?</StyledLink>

        <ActionsRow>
          <Button onClick={handleSubmit} wide>
            Login
          </Button>
        </ActionsRow>
      </form>
    );
  }
}

export default LoginForm;
