import { checkInActionType } from './checkInActionType';

export const checkInInitState = {
  moodLevel: 4,
  feelingSelectedList: [],
  comment: null,
  feelingOptions: [
    { id: 1, label: 'depressed' },
    { id: 2, label: 'bored' },
    { id: 3, label: 'optimistic' },
    { id: 4, label: 'happy' },
  ],
  moodLevelOptions: {
    minLevel: 1,
    maxLevel: 7,
  },
};

export const checkInReducer = (state = checkInInitState, action) => {
  const reducers = {
    [checkInActionType.CHECK_IN_MOOD_LEVEL_SET]: checkInMoodLevelSetCase,
    [checkInActionType.CHECK_IN_FEELING_TOGGLE]: checkInFeelingToggleCase,
    [checkInActionType.CHECK_IN_FEELING_RESET]: checkInFeelingResetCase,
    [checkInActionType.CHECK_IN_COMMENT_SET]: checkInCommentSetCase,
    [checkInActionType.CHECK_IN_RESET]: checkInResetCase,
    default: () => state,
  };

  return reducers[action.type]
    ? reducers[action.type](state, action)
    : reducers.default();
};

function checkInMoodLevelSetCase(state, action) {
  const { minLevel, maxLevel } = state.moodLevelOptions;

  let { moodLevel } = action.payload;

  if (moodLevel != null && moodLevel > maxLevel) {
    moodLevel = maxLevel;
  }
  if (moodLevel != null && moodLevel < minLevel) {
    moodLevel = minLevel;
  }

  return {
    ...state,
    moodLevel,
  };
}

function checkInFeelingToggleCase(state, action) {
  const { feelingId } = action.payload;
  const { feelingSelectedList } = state;

  if (feelingId != null) {
    const newFeelingList = !feelingSelectedList.includes(feelingId)
      ? [...feelingSelectedList, feelingId]
      : feelingSelectedList.filter(id => id !== feelingId);
  
    return {
      ...state,
      feelingSelectedList: newFeelingList,
    };
  }
  
  return state;
}

function checkInFeelingResetCase(state) {
  return {
    ...state,
    feelingSelectedList: [],
  };
}


function checkInCommentSetCase(state, action) {
  return {
    ...state,
    comment: action.payload.comment || null,
  };
}

function checkInResetCase(state, action) {
  return {
    ...state,
    moodLevel: 4,
    feelingSelectedList: [],
    comment: null,
  };
}
