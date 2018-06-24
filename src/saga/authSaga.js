import { call, put, all, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { has } from 'lodash';
import * as actions from '../actions/auth';
import * as session from '../services/session';
import * as Types from '../types/auth';
import AuthApi from '../api/auth';
import { redirect } from '../services/redirect';
import appConfig from '../config';

export function* alertFlow() {
  yield put({ type: 'SHOW_ALERT' });
  yield delay(1000);
  yield put({ type: 'HIDE_ALERT' });
}

export function* unAuthenticate() {
  yield all([
    put(actions.unAuthUser()),
    put(actions.removeToken()),
    call(session.removeToken)
  ]);
}

export function* authenticate(username, password) {
  try {
    yield delay(1000);
    yield put(actions.userSigningIn(true));
    const {
      data: { token }
    } = yield call(AuthApi.signIn, username, password);
    yield put(actions.authSuccess(token));
    yield put(actions.userSigningIn(false));
    return token;
  } catch (error) {
    if (has(error, 'response.data')) {
      yield put(actions.authError(error.response.data.error));
    } else {
      yield put(
        actions.authError(
          'Techinical Error Occured! Check if your auth server is running'
        )
      );
    }
  }
}

export function* unAuthenticateFlow() {
  while (true) {
    yield take(Types.UNAUTH_REQUESTED);
    yield call(unAuthenticate);
    redirect(appConfig.routes.LOGIN);
  }
}

export function* authFlow() {
  while (true) {
    const action = yield take(Types.LOGIN_REQUEST);
    const token = yield call(
      authenticate,
      action.payload.username,
      action.payload.password
    );
    if (token) {
      yield call(session.setToken, token);
      yield call(alertFlow);
      yield take(Types.UNAUTH_REQUESTED);
      yield call(unAuthenticate);
    }
  }
}
