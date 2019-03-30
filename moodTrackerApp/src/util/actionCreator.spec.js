import {actionCreator} from './index'

const TYPE = 'testType'
const PAYLOAD = {
  a: 1,
  b: 2
}

describe('actionCreator', () => {
  test('it works passing TYPE & PAYLOAD', () => {
    const testAction = {type: TYPE, payload: PAYLOAD}
    expect(actionCreator(TYPE, PAYLOAD)).toEqual(testAction)
  })
  
  test('it works passing only TYPE', () => {
    const testAction = {type: TYPE, payload: null}
    expect(actionCreator(TYPE)).toEqual(testAction)
  })
  
  test('it works without passing anything', () => {
    const testAction = {type: null, payload: null}
    expect(actionCreator()).toEqual(testAction)
  })
})