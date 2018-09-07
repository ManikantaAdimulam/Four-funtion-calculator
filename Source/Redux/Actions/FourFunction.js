/**
 *  Four functions
 */
export const FourFunctions = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVISION: 'DIVISION',
  PRESS: 'PRESS',
  EQUAL: 'EQUAL',
  CLEAR: 'CLEAR'
}

/**
 * Four function action
 */
export const FourFunctionActions = {
  add: (value) => {
    return { type: FourFunctions.ADD, value }
  },
  subtract: (value) => {
    return { type: FourFunctions.SUBTRACT, value }
  },
  multiply: (value) => {
    return { type: FourFunctions.MULTIPLY, value }
  },
  division: (value) => {
    return { type: FourFunctions.DIVISION, value }
  },
  press: (value) => {
    return { type: FourFunctions.PRESS, value }
  },
  equal: (value) => {
    return { type: FourFunctions.EQUAL, value }
  },
  clear: (value) => {
    return { type: FourFunctions.CLEAR, value }
  }
}
