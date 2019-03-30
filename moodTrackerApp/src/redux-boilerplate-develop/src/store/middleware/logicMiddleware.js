import {createLogicMiddleware} from 'redux-logic';

const logicList = [
	// TODO config: insert here a list of logics
];

const deps = {
	// TODO config: insert here deps to use in Logics
};

export const logicMiddleware = createLogicMiddleware(logicList, deps);
