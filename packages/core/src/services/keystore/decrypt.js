export function decrypt(password, keyfileContent) {
  return Promise.resolve(password + keyfileContent);
}
