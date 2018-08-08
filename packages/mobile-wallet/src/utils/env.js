export const isTest = process.env.NODE_ENV === 'test';
export const isDev = process.env.NODE_ENV === 'development';
export const isBeta = process.env.NODE_ENV === 'beta';
export const isProduction = process.env.NODE_ENV === 'production';
export const apiUrl = process.env.API_URL;
