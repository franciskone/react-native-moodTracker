import { insightsInitState, insightsReducer } from './insightsReducer';
import { insightsAction } from './insightsAction';

const testReducer = (initState, finalState, action) => {
  expect(insightsReducer(
    initState,
    action,
  )).toEqual(finalState);
};

describe('insightsReducer', () => {
  describe('insightsGetSuccessCase', () => {
    test('updates state passing parameters', () => {
      const averageMood = {
        1: 10,
        2: 10,
        3: 5,
        4: 5,
        5: 10,
        6: 40,
        7: 20,
      };
      
      const checkInAmount = 20;
      
      const checkInList = [
        {
          moodLevel: null,
          feelingList: [],
          comment: null,
          timestamp: 1553984521,
        },
      ];
      
      const finalState = {
        averageMood,
        checkInAmount,
        checkInList,
      };
      
      testReducer(
        insightsInitState,
        finalState,
        insightsAction.insightsGetSuccess(averageMood, checkInAmount, checkInList),
      );
    });
  
    test('updates state WITHOUT passing parameters', () => {
      const averageMood = {
        1: 10,
        2: 10,
        3: 5,
        4: 5,
        5: 10,
        6: 40,
        7: 20,
      };
  
      const checkInAmount = 20;
  
      const checkInList = [
        {
          moodLevel: null,
          feelingList: [],
          comment: null,
          timestamp: 1553984521,
        },
      ];
  
      const initState = {
        averageMood,
        checkInAmount,
        checkInList,
      };
      
      const finalState = {
        averageMood: {},
        checkInAmount: 0,
        checkInList: [],
      };
    
      testReducer(
        initState,
        finalState,
        insightsAction.insightsGetSuccess(),
      );
    });
  });
});
