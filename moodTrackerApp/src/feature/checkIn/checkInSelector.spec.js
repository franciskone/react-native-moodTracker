import { checkInSelector } from './checkInSelector';
import {checkInInitState, checkInReducer} from './checkInReducer'
import { checkInAction } from './checkInAction';
import {ROOT_REDUCER_NAMES} from "../../store/rootReducer"

const getState = (computedState) => {
  return {
    [ROOT_REDUCER_NAMES.CHECK_IN]: computedState,
  }
}

describe('checkInSelector', () => {
  test('moodLevel', () => {
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInMoodLevelSet(3)
      )
    );
    
    expect(checkInSelector.moodLevel(testState)).toBe(4);
  });
});
