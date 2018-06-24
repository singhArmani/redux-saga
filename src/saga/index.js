import { fork } from 'redux-saga/effects';
import { authFlow, unAuthenticateFlow } from './authSaga';
import { watchFetchGoals } from './goalSaga';

export default function* rootSaga() {
  yield fork(authFlow);
  yield fork(unAuthenticateFlow);
  yield fork(watchFetchGoals);
}
