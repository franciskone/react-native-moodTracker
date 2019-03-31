import { ROOT_REDUCER_NAMES } from '../../store/rootReducer';

const getLocalState = state => state[ROOT_REDUCER_NAMES.CHECK_IN];

export const checkInSelector = {
  moodLevel,
  feelingSelectedList,
  comment,
  feelingFullList,
};

function moodLevel(state) {
  return getLocalState(state).moodLevel || 4;
}

function feelingSelectedList(state) {
  return getLocalState(state).feelingSelectedList;
}

function comment(state) {
  return getLocalState(state).comment;
}

function feelingFullList(state) {
  const { feelingOptions } = getLocalState(state);
  const feelingSelectedItems = feelingSelectedList(state);
  
  return feelingOptions.map((item) => {
    const isSelected = feelingSelectedItems.includes(item.id);
    return {
      ...item,
      isSelected,
    };
  });
}
