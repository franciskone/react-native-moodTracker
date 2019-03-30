import { insightsActionTypes } from './insightsActionTypes';
import { actionCreator } from '../../util';

export const insightsAction = {
  insightsGet,
  insightsGetSuccess,
  insightsError,
};

function insightsGet() {
  return actionCreator(insightsActionTypes.GET);
}

function insightsGetSuccess(averageMood = {}, checkInAmount = 0, checkInList = []) {
  return actionCreator(insightsActionTypes.GET_SUCCESS, {
    averageMood,
    checkInAmount,
    checkInList,
  });
}

function insightsError() {
  return actionCreator(insightsActionTypes.GET_ERROR);
}
