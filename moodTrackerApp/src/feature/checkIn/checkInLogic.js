import { createLogic } from 'redux-logic';
import { checkInActionType } from './checkInActionType';
import { checkInSelector } from './checkInSelector';
import { checkInAction } from './checkInAction';

const checkInSaveLogic = createLogic({
  type: checkInActionType.CHECK_IN_SAVE, // actionType
  process({ getState, action, API }, dispatch, done) {
    const currentState = getState();
    
    API.postCheckIn({
      moodLevel: checkInSelector.moodLevel(currentState),
      feelingSelectedList: checkInSelector.feelingSelectedList(currentState),
      comment: checkInSelector.comment(currentState),
    })
      .then(res => res.data)
      .then((data) => {
        dispatch(checkInAction.checkInSaveSuccess());
      })
      .catch(() => dispatch(checkInAction.checkInSaveError()))
      .finally(() => done());
  },
});

const checkInSaveSuccessLogic = createLogic({
  type: checkInActionType.CHECK_IN_SAVE_SUCCESS, // actionType
  process({ getState, action }, dispatch, done) {
    alert('Feelings saved successfully');
    dispatch(checkInAction.checkInReset());
    done();
  },
});

const checkInSaveErrorLogic = createLogic({
  type: checkInActionType.CHECK_IN_SAVE_ERROR, // actionType
  process({ getState, action }, dispatch, done) {
    alert("Sorry, we couldn't save your feelings. Please try again");
    done();
  },
});

export const checkInLogic = [
  checkInSaveLogic,
  checkInSaveSuccessLogic,
  checkInSaveErrorLogic,
];
