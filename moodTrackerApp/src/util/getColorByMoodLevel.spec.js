import {getColorByMoodLevel} from "./getColorByMoodLevel"
import {MOOD_COLOR} from "./constants"

describe('getColorByMoodLevel', () => {
  test("it returns the 'max bad' color", () => expect(getColorByMoodLevel(1)).toEqual(MOOD_COLOR.SAD_MAX))
  test("it returns the 'bad' color", () => expect(getColorByMoodLevel(2)).toEqual(MOOD_COLOR.SAD))
  test("it returns the 'min bad' color", () => expect(getColorByMoodLevel(3)).toEqual(MOOD_COLOR.SAD_MIN))
  test("it returns the 'neutral' color", () => expect(getColorByMoodLevel(4)).toEqual(MOOD_COLOR.NEUTRAL))
  test("it returns the 'min good' color", () => expect(getColorByMoodLevel(5)).toEqual(MOOD_COLOR.HAPPY_MIN))
  test("it returns the 'good' color", () => expect(getColorByMoodLevel(6)).toEqual(MOOD_COLOR.HAPPY))
  test("it returns the 'max good' color", () => expect(getColorByMoodLevel(7)).toEqual(MOOD_COLOR.HAPPY_MAX))
  test("it returns the 'neutral' as default color", () => expect(getColorByMoodLevel()).toEqual(MOOD_COLOR.NEUTRAL))
})