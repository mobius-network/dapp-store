import StellarHDWallet from 'stellar-hd-wallet';
import scrypt from 'scrypt-async';
import nacl from 'tweetnacl';
import base64js from 'base64-js';

export function decrypt(password, keyfileContent) {
  return new Promise((resolve) => {
    const keyfile = JSON.parse(keyfileContent);
    const salt = base64js.toByteArray(keyfile.crypto.salt);
    const nonce = base64js.toByteArray(keyfile.crypto.nonce);

    scrypt(password, salt, keyfile.crypto.scryptOptions, key => {
      const chiper = base64js.toByteArray(keyfile.crypto.chiper);
      const seed = nacl.secretbox.open(chiper, nonce, key);
      const seedHex = new TextDecoder('utf-8').decode(seed);
      const wallet = StellarHDWallet.fromSeed(seedHex);

      resolve(wallet);
    });
  });
}
