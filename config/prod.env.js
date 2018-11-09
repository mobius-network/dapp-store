const baseEnv = require('./base.env');

module.exports = Object.assign(baseEnv, {
  API_URL: '"https://api.mobius.network/api/v1"',
  MOBI_ASSET_ISSUER: '"GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH"',
  NODE_ENV: '"production"',
  STELLAR_HORIZON_URL: '"https://horizon.stellar.org"',
  STELLAR_TESTNET: '"false"',
});
