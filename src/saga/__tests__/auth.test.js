import { unAuthenticate } from '../authSaga';
import { call, put, all } from 'redux-saga/effects';

import * as actions from '../../actions/auth';
import * as session from '../../services/session';

describe('unAuthenticateSaga', () => {
  const gen = unAuthenticate();

  it.only('should ', () => {
    expect(gen.next().value).toMatchObject(
      all([
        put(actions.unAuthUser()),
        put(actions.removeToken()),
        call(session.removeToken)
      ])
    );
  });
});
