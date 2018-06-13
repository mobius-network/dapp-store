import React, { Component } from 'react';
import { RestQuery } from './Query';

export const restQuery = config => WrappedComponent => {
  let lastResultProps;
  const { query, options, skip } = config;

  class RestQueryHoc extends Component {
    applyProps = fn => {
      if (typeof fn === 'function') {
        return fn(this.props);
      }

      return fn;
    };

    render() {
      if (options) {
        config.query = {
          ...query,
          ...this.applyProps(options),
        };
      }

      if (skip) {
        config.shouldSkip = this.applyProps(skip);
      }

      return (
        <RestQuery {...config} {...this.props}>
          {result => {
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
        </RestQuery>
      );
    }
  }

  return RestQueryHoc;
};
