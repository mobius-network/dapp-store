import bs58 from 'bs58';
import ipfsAPI from 'ipfs-api';
import { Buffer } from 'buffer/';
import { ipfsApiUrl } from './env';

/**
 * Decode the base58 string and then slice the first two bytes
 * which represent the function code and it's length, in this case:
 * function:0x12=sha2, size:0x20=256 bits
 * @export
 * @param {*} ipfsListing
 * @returns
 */
export function getBytes32FromIpfsHash(ipfsListing) {
  return bs58
    .decode(ipfsListing)
    .slice(2)
    .toString('hex');
}

export const ipfs = ipfsAPI({
  host: ipfsApiUrl,
  port: 5001,
  protocol: 'https',
});

export function addIpfsFiles(data) {
  const buffer = Buffer.from(JSON.stringify(data));

  return new Promise((resolve, reject) => {
    ipfs.files.add(buffer, { pin: true }, (err, ipfsHash) => {
      if (err) {
        reject(err);
      }

      try {
        const memo = getBytes32FromIpfsHash(ipfsHash[0].path);

        resolve(memo);
      } catch (error) {
        reject(error);
      }
    });
  });
}

export function getIpfsFiles(ipfsPath) {
  return new Promise((resolve, reject) => {
    ipfs.files.get(ipfsPath, (err, files) => {
      if (err) {
        reject(err);
      }

      try {
        const result = JSON.parse(files[0].content.toString('utf8'));

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
}
