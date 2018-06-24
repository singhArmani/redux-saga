import * as goalTypes from '../types/goal';
const initialState = {
  isFetchingGoals: false,
  goalList: [],
  errorFetchingGoals: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case goalTypes.START_FETCHING_GOALS:
      return { ...state, isFetchingGoals: true };
    case goalTypes.STOP_FETCHING_GOALS:
      return { ...state, isFetchingGoals: false };
    case goalTypes.UPDATE_GOALS:
      return { ...state, goalList: action.payload.goalList };
    case goalTypes.ERROR_FETCHING_GOALS:
      return { ...state, errorFetchingGoals: action.payload.error };
    case goalTypes.FETCH_TIMEOUT_ERROR:
      return { ...state, errorFetchingGoals: action.payload.error };
    default:
      return state;
  }
};

export default reducer;
