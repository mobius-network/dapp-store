const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
  HONEYBADGER_API_TOKEN: '"d52d00a4"',
  IPFS_API_URL: '"ipfs.infura.io"',
  MOBI_ASSET: '"MOBI"',
  MOBIUS_STORE_ADDRESS: '"GDOICN5HS2SQDPBTL3SBN7L6URIOIMMZS3WYDUH7IYZMZGUVPCPDAPPS"',
  MOBIUS_STORE_REG_PRICE: '"10"',
};
