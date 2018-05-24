// import { createSelector } from 'reselect';

export const signupStep = state => state.auth.signupStep;
export const getKeystore = state => state.auth.keystore;

export const isAuthorized = state =>
  !!state.auth.keystore && signupStep(state) === 'completed';
