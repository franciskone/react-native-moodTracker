import { appInitActionType } from './appInitActionType';
import { actionCreator } from '../../util';

export const appInitAction = {
  init,
};

function init() {
  return actionCreator(appInitActionType.INIT);
}
