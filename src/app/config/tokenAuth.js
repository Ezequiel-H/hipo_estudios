import axiosCli from './axios';

const tokenAuth = (token) => {
  if (token) {
    axiosCli.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosCli.defaults.headers.common['x-auth-token'];
  }
};

export default tokenAuth;
