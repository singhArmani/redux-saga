import { race, put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import GoalApi from '../api/goal';
import * as Types from '../types/goal';
import {
  startFetchingGoals,
  updateGoals,
  stopFetchingGoals
} from '../actions/goal';

export function* fetchGaols() {
  try {
    yield put(startFetchingGoals());
    const { response } = yield race({
      response: call(GoalApi.getGoals),
      timeout: call(delay, 2000)
    });
    if (response) {
      yield put(updateGoals(response.data.goals));
    } else {
      yield put({
        type: Types.FETCH_TIMEOUT_ERROR,
        payload: { error: 'timeout error while fetching goals' }
      });
    }
    yield put(stopFetchingGoals());
  } catch (err) {
    yield put(stopFetchingGoals());
    yield put({
      type: Types.ERROR_FETCHING_GOALS,
      payload: {
        error: err.message || 'Error Occured while fetching goalList'
      }
    });
  }
}

export function* watchFetchGoals() {
  yield takeLatest(Types.FETCH_GOALS_REQUEST, fetchGaols);
}
