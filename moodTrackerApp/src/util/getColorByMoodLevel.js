import {MOOD_COLOR} from "../constants"

const moodColors = {
	1: MOOD_COLOR.SAD_MAX,
	2: MOOD_COLOR.SAD,
	3 : MOOD_COLOR.SAD_MIN,
	4: MOOD_COLOR.NEUTRAL,
	5: MOOD_COLOR.HAPPY_MIN,
	6: MOOD_COLOR.HAPPY,
	7: MOOD_COLOR.HAPPY_MAX,
};

export const getColorByMoodLevel = (level = 4) => {
	return moodColors[level];
};