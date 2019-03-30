import {checkInActionType} from "./checkInActionType"

export const checkInInitState = {
	moodLevel: null,
	feelingList: [],
	comment: null,
	feelingOptions: [
		{ id: 1, label: "depressed" },
		{ id: 2, label: "bored" },
		{ id: 3, label: "optimistic" },
		{ id: 4, label: "happy" },
	],
	moodLevelOptions: {
		minLevel: 1,
		maxLevel: 7,
	}
};

export const checkInReducer = (state = checkInInitState, action) => {
	const reducers = {
		[checkInActionType.CHECK_IN_MOOD_LEVEL_SET]: checkInMoodLevelSetCase,
		[checkInActionType.CHECK_IN_FEELING_ADD]: checkInFeelingAddCase,
		[checkInActionType.CHECK_IN_FEELING_REMOVE]: checkInFeelingRemoveCase,
		[checkInActionType.CHECK_IN_COMMENT_SET]: checkInCommentSetCase,
		[checkInActionType.CHECK_IN_RESET]: checkInResetCase,
		default: () => state,
	};
	
	return reducers[action.type]
		? reducers[action.type](state, action)
		: reducers['default']();
};

function checkInMoodLevelSetCase(state, action) {
	const { minLevel, maxLevel } = state.moodLevelOptions;
	
	let moodLevel = action.payload.moodLevel;
	
	if(moodLevel != null && moodLevel > maxLevel) { moodLevel = maxLevel }
	if(moodLevel != null && moodLevel < minLevel) { moodLevel = minLevel }
	
	return {
		...state,
		moodLevel,
	};
}

function checkInFeelingAddCase(state, action) {
	const feelingId = action.payload.feelingId;
	const { feelingList } = state;
	
	const newFeelingList = feelingId != null && !feelingList.includes(feelingId)
		? [...feelingList,feelingId]
		: feelingList;
	
	return {
		...state,
		feelingList: newFeelingList,
	};
}

function checkInFeelingRemoveCase(state, action) {
	const feelingId = action.payload.feelingId;
	
	return {
		...state,
		feelingList: state.feelingList.filter(id => id !== feelingId),
	};
}

function checkInCommentSetCase(state, action) {
	return {
		...state,
		comment: action.payload.comment,
	};
}

function checkInResetCase(state, action) {
	return {
		...state,
		moodLevel: null,
		feelingList: [],
		comment: null,
	};
}