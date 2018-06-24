import * as Types from '../types/auth';

const initialState = {
  token: '',
  authenticated: false,
  isUserSigningIn: false,
  error: '',
  showAlert: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        error: '',
        token: action.payload.token,
        authenticated: true,
        isUserSigningIn: false
      };
    case Types.AUTH_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isUserSigningIn: false
      };
    case Types.UNAUTH_USER:
      return { ...state, error: '', authenticated: false };
    case Types.DELETE_TOKEN:
      return { ...state, token: '' };
    case Types.USER_SIGNING_IN:
      return { ...state, isUserSigningIn: action.payload.isUserSigningIn };
    case 'SHOW_ALERT':
      return { ...state, showAlert: true };
    case 'HIDE_ALERT':
      return { ...state, showAlert: false };
    default:
      return state;
  }
};

export default reducer;
