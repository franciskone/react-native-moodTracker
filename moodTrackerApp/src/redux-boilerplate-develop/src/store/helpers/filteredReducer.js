import {filterActions} from 'redux-ignore';

export const filteredReducer = (initState, actionsHandler) => {
  const reducer = (state = initState, action) => {
    const handler = actionsHandler[action.type];
    return handler
      ? handler(state, action)
      : state;
  };
  return filterActions(reducer, Object.keys(actionsHandler));
};
