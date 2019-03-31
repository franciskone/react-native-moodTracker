import { ROOT_REDUCER_NAMES } from '../../store/rootReducer';

const getLocalState = state => state[ROOT_REDUCER_NAMES.CHECK_IN];

export const checkInSelector = {
  moodLevel,
};

function moodLevel(state) {
  return getLocalState(state).moodLevel ;
}
