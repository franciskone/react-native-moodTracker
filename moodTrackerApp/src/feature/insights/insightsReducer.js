import { insightsActionTypes } from './insightsActionTypes';

export const insightsInitState = {
  averageMood: {
    1: 10,
    2: 10,
    3: 5,
    4: 5,
    5: 10,
    6: 40,
    7: 20,
  },
  checkInAmount: 20,
  checkInList: [
    // {
    //   moodLevel: null,
    //   feelingSelectedList: [],
    //   comment: null,
    //   timestamp: 1553984521,
    // },
    {
      moodLevel: 2,
      feelingSelectedList: ['depressed', 'optimistic', 'bored', 'happy'],
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      timestamp: 1553984521,
    },
    
  ],
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
