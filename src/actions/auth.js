import * as Types from '../types/auth';
export function initiateAuthRequest(username, password) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: { username, password }
  };
}

export function userSigningIn(isUserSigningIn) {
  return {
    type: Types.USER_SIGNING_IN,
    payload: {
      isUserSigningIn: isUserSigningIn
    }
  };
}

/**
 * Authentication Success
 *
 * @param token
 * @returns {object}
 */
export function authSuccess(token) {
  return {
    type: Types.AUTH_SUCCESS,
    payload: {
      token
    }
  };
}

/**
 * Register that an error has occurred with authentication.
 *
 * @param error
 * @returns {object}
 */
export function authError(error) {
  return {
    type: Types.AUTH_ERROR,
    payload: {
      error
    }
  };
}

/**
 * Removing token from redux
 *
 * @returns {object}
 */
export function removeToken() {
  return {
    type: Types.DELETE_TOKEN
  };
}

export function unAuthUser() {
  return {
    type: Types.UNAUTH_USER
  };
}

export function unAuthRequested() {
  return {
    type: Types.UNAUTH_REQUESTED
  };
}
