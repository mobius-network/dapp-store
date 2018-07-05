const { basename } = require('path');
const { readFileSync } = require('fs');
const { getOptions } = require('loader-utils');
const glob = require('glob');
const { merge } = require('lodash');

module.exports = function(source) {
  const callback = this.async();
  const opts = getOptions(this);
  const locale = basename(this.resource, '.json');
  const pattern = opts.pattern.replace('[locale]', locale);

  glob(
    pattern,
    {
      root: this.rootContext,
      nosort: true,
    },
    (err, files) => {
      if (err) {
        return callback(err);
      }

      if (files.length === 0) {
        return callback(null, source);
      }

      let result = JSON.parse(source);

      files.forEach(file => {
        this.addDependency(file);

        try {
          const content = JSON.parse(readFileSync(file, 'utf8'));
          return (result = merge(result, content));
        } catch (error) {
          return callback(err);
        }
      });

      return callback(null, JSON.stringify(result));
    }
  );

  return undefined;
};
