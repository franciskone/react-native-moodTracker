import { combineReducers } from 'redux';
import { checkInReducer } from '../feature/checkIn';
import { insightsReducer } from '../feature/insights';


export const ROOT_REDUCER_NAMES = {
  CHECK_IN: 'checkIn',
  INSIGHTS: 'insights',
};

export const persistedReducersList = [];

const rootReducer = combineReducers({
  [ROOT_REDUCER_NAMES.CHECK_IN]: checkInReducer,
  [ROOT_REDUCER_NAMES.INSIGHTS]: insightsReducer,
});
export default rootReducer;
