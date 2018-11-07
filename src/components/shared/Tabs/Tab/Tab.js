import { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    children: PropTypes.any,
    fluid: PropTypes.bool,
    title: PropTypes.string,
  };

  static defaultProps = {
    fluid: false,
  };

  render() {
    return this.props.children;
  }
}

export default Tab;
