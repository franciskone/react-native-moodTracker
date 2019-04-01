import { ROOT_REDUCER_NAMES } from '../../store/rootReducer';
import { getColorByMoodLevel } from '../../util';

const getLocalState = state => state[ROOT_REDUCER_NAMES.INSIGHTS];

export const insightsSelector = {
  averageMoodForChart,
  checkInAmount,
  checkInList,
};

function averageMoodForChart(state) {
  return getLocalState(state).averageMood
    .filter(item => item.value)
    .map(item => ({
      ...item,
      color: getColorByMoodLevel(item.key),
    }));
}

function checkInAmount(state) {
  return getLocalState(state).checkInAmount;
}
function checkInList(state) {
  return getLocalState(state).checkInList.sort((a, b) => {
    if (a.timestamp < b.timestamp) { return 1; }
    if (a.timestamp > b.timestamp) { return -1; }
    return 0;
  });
}
