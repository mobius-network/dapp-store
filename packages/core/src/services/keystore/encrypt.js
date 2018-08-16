export async function encrypt(password, mnemonic) {
  return Promise.resolve(password + mnemonic);
}
