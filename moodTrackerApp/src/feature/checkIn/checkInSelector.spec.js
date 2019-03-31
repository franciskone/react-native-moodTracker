import { checkInSelector } from './checkInSelector';
import {checkInInitState, checkInReducer} from './checkInReducer'
import { checkInAction } from './checkInAction';
import {ROOT_REDUCER_NAMES} from "../../store/rootReducer"

const getState = (computedState) => ({ [ROOT_REDUCER_NAMES.CHECK_IN]: computedState });

describe('checkInSelector', () => {
  test('moodLevel', () => {
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInMoodLevelSet(3)
      )
    );
    
    expect(checkInSelector.moodLevel(testState)).toBe(3);
  });
  
  test('feelingList', () => {
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInFeelingAdd(2)
      )
    );
    
    expect(checkInSelector.feelingList(testState)).toEqual([2]);
  });
  
  test('comment', () => {
    const testComment = 'test comment';
    
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInCommentSet(testComment)
      )
    );
    
    expect(checkInSelector.comment(testState)).toEqual(testComment);
  });
  
  test('feelingOptions', () => {
    const testState = getState(checkInInitState);
    expect(checkInSelector.feelingOptions(testState))
      .toEqual(testState[ROOT_REDUCER_NAMES.CHECK_IN].feelingOptions);
  });
});
