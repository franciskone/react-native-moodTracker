import { checkInSelector } from './checkInSelector';
import { checkInInitState, checkInReducer } from './checkInReducer';
import { checkInAction } from './checkInAction';
import { ROOT_REDUCER_NAMES } from '../../store/rootReducer';

const getState = computedState => ({ [ROOT_REDUCER_NAMES.CHECK_IN]: computedState });

describe('checkInSelector', () => {
  test('moodLevel', () => {
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInMoodLevelSet(3),
      ),
    );
    
    expect(checkInSelector.moodLevel(testState)).toBe(3);
  });
  
  test('feelingSelectedList', () => {
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInFeelingToggle(2),
      ),
    );
    
    expect(checkInSelector.feelingSelectedList(testState)).toEqual([2]);
  });
  
  test('comment', () => {
    const testComment = 'test comment';
    
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInCommentSet(testComment),
      ),
    );
    
    expect(checkInSelector.comment(testState)).toEqual(testComment);
  });
  
  test('feelingFullList', () => {
    const testState = getState(
      checkInReducer(
        checkInInitState,
        checkInAction.checkInFeelingToggle(3),
      ),
    );
    expect(checkInSelector.feelingFullList(testState))
      .toEqual([
        { id: 1, label: 'depressed', isSelected: false },
        { id: 2, label: 'bored', isSelected: false },
        { id: 3, label: 'optimistic', isSelected: true },
        { id: 4, label: 'happy', isSelected: false },
      ]);
  });
});
