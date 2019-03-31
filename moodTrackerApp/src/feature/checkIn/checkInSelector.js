import { ROOT_REDUCER_NAMES } from '../../store/rootReducer';

const getLocalState = state => state[ROOT_REDUCER_NAMES.CHECK_IN];

export const checkInSelector = {
  moodLevel,
  feelingList,
  comment,
  feelingOptions,
};

function moodLevel(state) {
  return getLocalState(state).moodLevel || 4;
}

function feelingList(state) {
  return getLocalState(state).feelingList;
}

function comment(state) {
  return getLocalState(state).comment;
}

function feelingOptions(state) {
  return getLocalState(state).feelingOptions;
}
