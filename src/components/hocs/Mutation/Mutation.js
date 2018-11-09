import { Component } from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';

import { requestActions } from 'state/requests';

const { requestStart } = requestActions;

export class RestMutation extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  static defaultProps = {
    query: {},
    options: {},
    action: requestStart,
  };

  // eslint-disable-next-line react/sort-comp
  hasMounted = false;

  state = {
    loading: false,
    error: undefined,
    result: undefined,
    networkStatus: 'string',
  };

  componentDidMount() {
    this.hasMounted = true;
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  getMutationResult = () => ({
    ...this.state,
  });

  updateState = (data) => {
    if (this.hasMounted) {
      this.setState(data);
    }
  };

  runMutation = async (options) => {
    const { store } = this.context;
    const { query, action } = this.props;
    const dynamicPayload = options.nativeEvent ? undefined : options;

    this.setState({ loading: true });

    try {
      const result = await new Promise((resolve, reject) => {
        const requestAction = action(merge(query, dynamicPayload), {
          resolve,
          reject,
        });

        return store.dispatch(requestAction);
      });

      const newState = { loading: false, result };

      this.updateState(newState);
      return newState;
    } catch (error) {
      const newState = { loading: false, error, result: undefined };

      this.updateState(newState);
      return newState;
    }
  };

  render() {
    const { children } = this.props;

    return children(this.runMutation, this.getMutationResult());
  }
}
