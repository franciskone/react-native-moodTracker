import { checkInInitState, checkInReducer } from './checkInReducer';
import { checkInAction } from './checkInAction';

const testReducer = (initState, finalState, action) => {
  expect(checkInReducer(
    initState,
    action,
  )).toEqual(finalState);
};

describe('checkIn reducer', () => {
  describe('checkInMoodLevelSetCase', () => {
    test('should return the initial state', () => {
      testReducer(
        checkInInitState,
        checkInInitState,
        {},
      );
    });

    test('minLevel < checkInMoodLevelSet < maxLevel', () => {
      const moodLevel = checkInInitState.moodLevelOptions.maxLevel - 1;

      const finalState = {
        ...checkInInitState,
        moodLevel,
      };

      testReducer(
        checkInInitState,
        finalState,
        checkInAction.checkInMoodLevelSet(moodLevel),
      );
    });

    test('checkInMoodLevelSet > maxLevel', () => {
      const moodLevel = checkInInitState.moodLevelOptions.maxLevel + 1;

      const finalState = {
        ...checkInInitState,
        moodLevel: checkInInitState.moodLevelOptions.maxLevel,
      };

      testReducer(
        checkInInitState,
        finalState,
        checkInAction.checkInMoodLevelSet(moodLevel),
      );
    });

    test('checkInMoodLevelSet < minLevel', () => {
      const moodLevel = checkInInitState.moodLevelOptions.minLevel - 1;

      console.log(moodLevel);

      const finalState = {
        ...checkInInitState,
        moodLevel: checkInInitState.moodLevelOptions.minLevel,
      };

      testReducer(
        checkInInitState,
        finalState,
        checkInAction.checkInMoodLevelSet(moodLevel),
      );
    });
  });

  describe('checkInFeelingToggleCase', () => {
    test('adds feelingId to the feelingSelectedList if not included', () => {
      const testInitState = {
        ...checkInInitState,
        feelingSelectedList: [2],
      };

      const finalState = {
        ...testInitState,
        feelingSelectedList: [2, 4],
      };

      testReducer(
        testInitState,
        finalState,
        checkInAction.checkInFeelingToggle(4),
      );
    });

    test('remove feelingId if already present in feelingSelectedList', () => {
      const testInitState = {
        ...checkInInitState,
        feelingSelectedList: [2, 4],
      };
      
      const finalState = {
        ...testInitState,
        feelingSelectedList: [2],
      };
  
      testReducer(
        testInitState,
        finalState,
        checkInAction.checkInFeelingToggle(4),
      );
    });
  });

  describe('checkInCommentSetCase', () => {
    test('sets a new comment if previously it was null', () => {
      const testComment = 'test comment';

      const testInitState = {
        ...checkInInitState,
        comment: null,
      };

      const finalState = {
        ...testInitState,
        comment: testComment,
      };

      testReducer(
        testInitState,
        finalState,
        checkInAction.checkInCommentSet(testComment),
      );
    });

    test('sets a new comment if previously it was already present', () => {
      const testComment = 'test comment';

      const testInitState = {
        ...checkInInitState,
        comment: 'old test comment',
      };

      const finalState = {
        ...testInitState,
        comment: testComment,
      };

      testReducer(
        testInitState,
        finalState,
        checkInAction.checkInCommentSet(testComment),
      );
    });
  });

  describe('checkInResetCase', () => {
    test('checkInResetCase on initState', () => {
      testReducer(
        checkInInitState,
        checkInInitState,
        checkInAction.checkInReset(),
      );
    });

    test('checkInResetCase with checkIn data already in place', () => {
      const testInitState = {
        moodLevel: 4,
        feelingSelectedList: [3, 2],
        comment: 'test comment',
        feelingOptions: [
          { id: 1, label: 'depressed' },
          { id: 2, label: 'bored' },
          { id: 3, label: 'optimistic' },
          { id: 4, label: 'happy' },
        ],
        moodLevelOptions: {
          minLevel: 1,
          maxLevel: 7,
        },
      };

      testReducer(
        testInitState,
        checkInInitState,
        checkInAction.checkInReset(),
      );
    });
  });
});
