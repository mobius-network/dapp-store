const merge = require('webpack-merge');

const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  STELLAR_HORIZON_URL: '"https://horizon-testnet.stellar.org"',
  STELLAR_TESTNET: '"true"',
  API_URL: '"https://beta.mobius.network"',
  MOBI_ASSET: '"MOBI"',
  MOBI_ASSET_ISSUER: '"GDRWBLJURXUKM4RWDZDTPJNX6XBYFO3PSE4H4GPUL6H6RCUQVKTSD4AT"',
});
