const baseEnv = require('./base.env');

module.exports = Object.assign(baseEnv, {
  API_URL: '"https://beta.mobius.network/api/v1"',
  MOBI_ASSET_ISSUER: '"GDRWBLJURXUKM4RWDZDTPJNX6XBYFO3PSE4H4GPUL6H6RCUQVKTSD4AT"',
  NODE_ENV: '"beta"',
  STELLAR_HORIZON_URL: '"https://horizon-testnet.stellar.org"',
  STELLAR_TESTNET: '"true"',
});
