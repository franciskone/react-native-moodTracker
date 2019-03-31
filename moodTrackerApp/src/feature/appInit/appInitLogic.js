import { StausBar } from 'react-native';
import { createLogic } from 'redux-logic';
import { appInitActionType } from './appInitActionType';
import { insightsAction } from '../insights/insightsAction';

const appInitInitLogic = createLogic({
  type: appInitActionType.INIT, // actionType
  process({ getState, action, API }, dispatch, done) {
    dispatch(insightsAction.insightsGet());
    done();
  },
});

export const appInitLogic = [
  appInitInitLogic,
];
