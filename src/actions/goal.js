import * as goalTypes from '../types/goal';
import GoalApi from '../api/goal';

export const startFetchingGoals = () => ({
  type: goalTypes.START_FETCHING_GOALS
});

export const stopFetchingGoals = () => ({
  type: goalTypes.STOP_FETCHING_GOALS
});

export const fetchGoalRequest = () => ({
  type: goalTypes.FETCH_GOALS_REQUEST
});

export const updateGoals = goalList => ({
  type: goalTypes.UPDATE_GOALS,
  payload: {
    goalList
  }
});
