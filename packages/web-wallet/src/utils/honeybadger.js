import Honeybadger from 'honeybadger-js';
import { isProduction } from './env';

Honeybadger.configure({
  apiKey: process.env.HONEYBADGER_API_TOKEN,
  debug: !isProduction,
  environment: process.env.NODE_ENV,
  revision: process.env.COMMITHASH,
});

export function notify(error) {
  if (isProduction) {
    Honeybadger.notify(error);
  }
}
