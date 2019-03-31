import { checkInActionType } from './checkInActionType';
import { actionCreator } from '../../util';

export const checkInAction = {
  checkInMoodLevelSet,
  checkInFeelingToggle,
  checkInFeelingReset,
  checkInCommentSet,
  checkInReset,

  checkInSave,
  checkInSaveSuccess,
  checkInSaveError,
};

function checkInMoodLevelSet(moodLevel = null) {
  return actionCreator(
    checkInActionType.CHECK_IN_MOOD_LEVEL_SET,
    { moodLevel },
  );
}

function checkInFeelingToggle(feelingId = null) {
  return actionCreator(
    checkInActionType.CHECK_IN_FEELING_TOGGLE,
    { feelingId },
  );
}

function checkInFeelingReset() {
  return actionCreator(checkInActionType.CHECK_IN_RESET);
}

function checkInCommentSet(comment = '') {
  return actionCreator(
    checkInActionType.CHECK_IN_COMMENT_SET,
    { comment },
  );
}

function checkInReset() {
  return actionCreator(checkInActionType.CHECK_IN_RESET);
}

function checkInSave() {
  return actionCreator(checkInActionType.CHECK_IN_SAVE);
}

function checkInSaveSuccess() {
  return actionCreator(checkInActionType.CHECK_IN_SAVE_SUCCESS);
}

function checkInSaveError() {
  return actionCreator(checkInActionType.CHECK_IN_SAVE_ERROR);
}
