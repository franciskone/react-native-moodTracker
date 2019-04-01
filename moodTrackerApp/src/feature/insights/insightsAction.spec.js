import { insightsActionTypes } from './insightsActionTypes';
import { insightsAction } from './insightsAction';


describe('insightsAction', () => {
  test('insightsGet', () => {
    expect(insightsAction.insightsGet())
      .toEqual({
        type: insightsActionTypes.GET,
        payload: null,
      });
  });
  
  describe('insightsGetSuccess', () => {
    test('create action object passing parameters', () => {
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
          moodLevel: 3,
          feelingSelectedList: [1, 3],
          comment: 'test comment',
          timestamp: 1553984521,
        },
      ];
      
      expect(insightsAction.insightsGetSuccess(averageMood, checkInAmount, checkInList))
        .toEqual({
          type: insightsActionTypes.GET_SUCCESS,
          payload: {
            averageMood,
            checkInList,
            checkInAmount,
          },
        });
    });
  
    test('create action object without passing parameters', () => {
      expect(insightsAction.insightsGetSuccess())
        .toEqual({
          type: insightsActionTypes.GET_SUCCESS,
          payload: {
            averageMood: {},
            checkInList: [],
            checkInAmount: 0,
          },
        });
    });
  });
  
  test('insightsError', () => {
    expect(insightsAction.insightsError())
      .toEqual({
        type: insightsActionTypes.GET_ERROR,
        payload: null,
      });
  });
});
