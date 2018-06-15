import Honeybadger from 'honeybadger-js';
import { isProduction } from './env';

Honeybadger.configure({
  apiKey: process.env.HONEYBADGER_API_TOKEN,
  environment: process.env.NODE_ENV,
  revision: process.env.COMMITHASH,
  debug: !isProduction,
  disabled: !isProduction,
});

export function notify(error) {
  return Honeybadger.notify(error);
}
