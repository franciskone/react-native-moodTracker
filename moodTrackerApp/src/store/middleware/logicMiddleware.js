import { createLogicMiddleware } from 'redux-logic';
import { API } from '../../util';
import { appInitLogic } from '../../feature/appInit';
import { checkInLogic } from '../../feature/checkIn';
import { insightsLogic } from '../../feature/insights';

const logicList = [
  ...appInitLogic,
  ...insightsLogic,
  ...checkInLogic,
];

const deps = {
  API,
};

export default logicMiddleware = createLogicMiddleware(logicList, deps);
