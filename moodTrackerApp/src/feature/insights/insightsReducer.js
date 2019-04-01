import { insightsActionTypes } from './insightsActionTypes';

export const insightsInitState = {
  averageMood: [],
  checkInAmount: 0,
  checkInList: [],
};

export const insightsReducer = (state = insightsInitState, action) => {
  const reducers = {
    [insightsActionTypes.GET_SUCCESS]: insightsGetSuccessCase,
    default: () => state,
  };

  return reducers[action.type]
    ? reducers[action.type](state, action)
    : reducers.default();
};

function insightsGetSuccessCase(state, action) {
  const { averageMood, checkInAmount, checkInList } = action.payload;
  
  return {
    ...state,
    averageMood,
    checkInAmount,
    checkInList,
  };
}
