import { FourFunctions } from '../Actions/FourFunction'

const initialState = {
  displayValues: '',
  result: 0,
  lastValue: ''
}

export function calculationReducer(state = initialState, action) {
  console.log(action.value)
  switch (action.type) {
    case FourFunctions.ADD:
      console.log(state)
      return {
        ...state,
        result:
          state.result + parseInt(state.lastValue != '' ? state.lastValue : 0),
        displayValues: state.displayValues + action.value,
        lastValue: ''
      }
    case FourFunctions.SUBTRACT:
      console.log(state)
      return {
        ...state,
        result:
          state.result - parseInt(state.lastValue != '' ? state.lastValue : 0),
        displayValues: state.displayValues + action.value,
        lastValue: ''
      }
    case FourFunctions.MULTIPLY:
      return {
        result:
          state.result * parseInt(state.lastValue != '' ? state.lastValue : 1),
        displayValues: state.displayValues + action.value,
        lastValue: ''
      }
    case FourFunctions.DIVISION:
      return {
        ...state,
        result:
          state.result / parseInt(state.lastValue != '' ? state.lastValue : 1),
        displayValues: state.displayValues + action.value,
        lastValue: ''
      }
    case FourFunctions.CLEAR:
      return {
        ...state,
        result: 0,
        displayValues: ''
      }
    case FourFunctions.EQUAL:
      return {
        ...state,
        result: state.result,
        displayValues: state.displayValues
      }
    case FourFunctions.PRESS:
      return {
        ...state,
        displayValues: state.displayValues + action.value,
        lastValue: parseInt(state.lastValue + action.value)
      }
    default:
      return { ...state }
  }
}
