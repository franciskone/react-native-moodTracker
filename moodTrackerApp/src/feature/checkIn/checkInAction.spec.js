import {checkInAction} from "./checkInAction"
import {checkInActionType} from "./checkInActionType"

describe('checkIn actions', () => {
  test('checkInMoodLevelSet returns the correct action object', () => {
    const testLevel = 1
    
    expect(checkInAction.checkInMoodLevelSet(testLevel))
    .toEqual({
      type: checkInActionType.CHECK_IN_MOOD_LEVEL_SET,
      payload: {moodLevel: testLevel},
    })
    
    expect(checkInAction.checkInMoodLevelSet())
    .toEqual({
      type: checkInActionType.CHECK_IN_MOOD_LEVEL_SET,
      payload: {moodLevel: null},
    })
  })
  
  test('checkInFeelingAdd returns the correct action object', () => {
    const testFeelingId = 1
    
    expect(checkInAction.checkInFeelingAdd(testFeelingId))
    .toEqual({
      type: checkInActionType.CHECK_IN_FEELING_ADD,
      payload: {feelingId: testFeelingId},
    })
    
    expect(checkInAction.checkInFeelingAdd())
    .toEqual({
      type: checkInActionType.CHECK_IN_FEELING_ADD,
      payload: {feelingId: null},
    })
  })
  
  test('checkInFeelingRemove returns the correct action object', () => {
    const testFeelingId = 1
    
    expect(checkInAction.checkInFeelingRemove(testFeelingId))
    .toEqual({
      type: checkInActionType.CHECK_IN_FEELING_REMOVE,
      payload: {feelingId: testFeelingId},
    })
    
    expect(checkInAction.checkInFeelingRemove())
    .toEqual({
      type: checkInActionType.CHECK_IN_FEELING_REMOVE,
      payload: {feelingId: null},
    })
  })
  
  test('checkInCommentSet returns the correct action object', () => {
    const testComment = 'test content'
    
    expect(checkInAction.checkInCommentSet(testComment))
    .toEqual({
      type: checkInActionType.CHECK_IN_COMMENT_SET,
      payload: {comment: testComment},
    })
    
    expect(checkInAction.checkInCommentSet())
    .toEqual({
      type: checkInActionType.CHECK_IN_COMMENT_SET,
      payload: {comment: ''},
    })
  })
  
  test('checkInReset returns the correct action object', () => {
    expect(checkInAction.checkInReset())
    .toEqual({
      type: checkInActionType.CHECK_IN_RESET,
      payload: null,
    })
  })
  
  test('checkInSave returns the correct action object', () => {
    expect(checkInAction.checkInSave())
    .toEqual({
      type: checkInActionType.CHECK_IN_SAVE,
      payload: null,
    })
  })
  
  test('checkInSaveSuccess returns the correct action object', () => {
    expect(checkInAction.checkInSaveSuccess())
    .toEqual({
      type: checkInActionType.CHECK_IN_SAVE_SUCCESS,
      payload: null,
    })
  })
  
  test('checkInSaveError returns the correct action object', () => {
    expect(checkInAction.checkInSaveError())
    .toEqual({
      type: checkInActionType.CHECK_IN_SAVE_ERROR,
      payload: null,
    })
  })
})