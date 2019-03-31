import { applyMiddleware } from 'redux';
import logicMiddleware from './logicMiddleware';

export default middlewares = applyMiddleware(
  logicMiddleware,
);
