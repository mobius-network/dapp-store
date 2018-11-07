import React, { Component } from 'react';
import { RestMutation } from './Mutation';

export const restMutation = config => (WrappedComponent) => {
  let lastResultProps;
  const { query, options } = config;

  class RestMutationHoc extends Component {
    applyProps = (fn) => {
      if (typeof fn === 'function') {
        return fn(this.props);
      }

      return fn;
    };

    render() {
      // eslint-disable-next-line no-param-reassign
      config.query = {
        name: config.name,
        ...query,
        ...this.applyProps(options),
      };

      return (
        <RestMutation {...config} {...this.props}>
          {(mutate, r) => {
            const result = { mutate, ...r };

            const name = config.name || 'data';
            let childProps = { [name]: result };

            if (config.props) {
              const newResult = {
                [name]: result,
                ownProps: this.props,
              };

              lastResultProps = config.props(newResult, lastResultProps);
              childProps = lastResultProps;
            }

            return <WrappedComponent {...this.props} {...childProps} />;
          }}
        </RestMutation>
      );
    }
  }

  return RestMutationHoc;
};
