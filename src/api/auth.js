import APIUtil from './apiUtil';

const api = new APIUtil();

const AuthApi = {
  signIn(username, password) {
    // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
    // This will set an `Authorization` header, overwriting any existing
    // `Authorization` custom headers you have set using `headers`.
    // const config = {
    //   auth: {
    //     username,
    //     password
    //   }
    // };
    // fake api call
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            data: {
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJ0ZXN0QGdtYWlsLmNvbSIsInBhc3MiOiJyZWFjdCJ9LCJpYXQiOjE1Mjk4NDI2NTksImV4cCI6MTUyOTg0OTg1OX0.Gr0DBc2CEILwx8WTUinpepz8zpixj5kE98w2NkENmds'
            }
          }),
        2000
      );
    });
    // return api.post('login', {}, config);
  }
};

export default AuthApi;
