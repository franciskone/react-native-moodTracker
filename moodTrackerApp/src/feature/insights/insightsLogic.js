import { createLogic } from 'redux-logic';
import { insightsActionTypes } from './insightsActionTypes';
import { insightsAction } from './insightsAction';

const insightsGetLogic = createLogic({
  type: insightsActionTypes.GET, // actionType
  process({ getState, action, API }, dispatch, done) {
    API.getInsights()
      .then((res) => {
        const { averageMood = {}, checkInAmount = 0, checkInList = [] } = res.data;
    
        dispatch(insightsAction.insightsGetSuccess(
          averageMood,
          checkInAmount,
          checkInList,
        ));
      })
      .catch(() => dispatch(insightsAction.insightsError()))
      .finally(() => done());
  },
});
export const insightsLogic = [insightsGetLogic];
