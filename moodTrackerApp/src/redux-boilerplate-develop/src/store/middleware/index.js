import { applyMiddleware } from 'redux';
import { logicMiddleware } from './logicMiddleware';

export const middlewares = applyMiddleware(
  logicMiddleware,
);
