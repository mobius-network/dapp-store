import { yieldSagas } from 'state/utils';
import signupSaga from './signupSaga';
import downloadKeypairSaga from './downloadKeypairSaga';

export * from './reducer';
export * from './selectors';
export * from './signupSaga';

export const authSagas = yieldSagas(signupSaga, downloadKeypairSaga);
