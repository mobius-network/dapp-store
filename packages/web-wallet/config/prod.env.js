const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  API_URL: '"https://mobius.network/api/v1"',
  COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
  HONEYBADGER_API_TOKEN: '"d52d00a4"',
  MOBI_ASSET_ISSUER: '"GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH"',
  MOBI_ASSET: '"MOBI"',
  NODE_ENV: '"production"',
  STELLAR_HORIZON_URL: '"https://horizon.stellar.org"',
  STELLAR_TESTNET: '"false"',
};
